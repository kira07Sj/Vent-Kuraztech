// components/Vent/VentForm.jsx
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function VentForm() {
  const [ventText, setVentText] = useState('');
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ventText.trim()) return;

    const newVent = {
      id: Date.now(),
      text: ventText,
      author: user?.email || 'Anonymous',
      timestamp: new Date().toISOString(),
      votes: 0
    };

    // Save to localStorage
    const vents = JSON.parse(localStorage.getItem('vents')) || [];
    localStorage.setItem('vents', JSON.stringify([...vents, newVent]));
    setVentText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <textarea
        value={ventText}
        onChange={(e) => setVentText(e.target.value)}
        placeholder="What's on your mind?"
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