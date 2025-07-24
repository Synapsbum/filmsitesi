import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { title, overview, image } = req.body;

  if (!title || !overview || !image) {
    return res.status(400).json({ error: "Eksik veri" });
  }

  try {
    const docRef = await addDoc(collection(db, "customMovies"), {
      title,
      overview,
      image,
      createdAt: Timestamp.now(),
    });

    res.status(200).json({ id: docRef.id });
  } catch (error) {
    res.status(500).json({ error: "Firestore'a kaydedilemedi." });
  }
}