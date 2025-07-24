import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const q = query(collection(db, "customMovies"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const movies = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: "Veriler alınamadı." });
  }
}