import { useState } from "react";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Ekleniyor...");

    const res = await fetch("/api/addMovie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, overview, image }),
    });

    if (res.ok) {
      setStatus("Başarıyla eklendi!");
      setTitle(""); setOverview(""); setImage("");
    } else {
      setStatus("Hata oluştu.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Film Ekle</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border"
          placeholder="Başlık"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 border"
          placeholder="Açıklama"
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
        />
        <input
          className="w-full p-2 border"
          placeholder="Görsel URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Ekle
        </button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
}