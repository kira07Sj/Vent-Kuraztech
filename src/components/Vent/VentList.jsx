// src/components/Vent/VentList.jsx
import { useState, useEffect } from "react";

export default function VentList() {
  const [vents, setVents] = useState([]);

  useEffect(() => {
    const storedVents = JSON.parse(localStorage.getItem("vents")) || [];
    setVents(storedVents);
  }, []);

  const handleVote = (id, delta) => {
    const updatedVents = vents.map((vent) =>
      vent.id === id ? { ...vent, votes: vent.votes + delta } : vent
    );
    setVents(updatedVents);
    localStorage.setItem("vents", JSON.stringify(updatedVents));
  };

  return (
    <div className="space-y-4">
      {vents.map((vent) => (
        <div key={vent.id} className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-800">{vent.text}</p>
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-500">By: {vent.author}</span>
            <div className="flex gap-2">
              <button onClick={() => handleVote(vent.id, -1)}>👎</button>
              <span>{vent.votes}</span>
              <button onClick={() => handleVote(vent.id, 1)}>👍</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}