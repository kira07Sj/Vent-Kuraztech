// src/components/Vent/VentForm.jsx
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function VentForm() {
  const [text, setText] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newVent = {
      id: Date.now(),
      text,
      author: user?.email || "Anonymous",
      votes: 0,
    };

    const vents = JSON.parse(localStorage.getItem("vents")) || [];
    localStorage.setItem("vents", JSON.stringify([...vents, newVent]));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <textarea
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-3 border rounded-lg"
        rows={3}
      />
      <button
        type="submit"
        className="mt-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
      >
        Post Vent
      </button>
    </form>
  );
}