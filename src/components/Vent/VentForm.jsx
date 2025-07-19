// components/Vent/VentForm.jsx
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function VentForm({classname, onClose}) {
  const [ventText, setVentText] = useState('');
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ventText.trim()) return;

    const newVent = {
      id: Date.now(),
      text: ventText,
      author: user?.email || 'Anonymous',
      userId: user?.id,
      timestamp: new Date().toISOString(),
      votes: [],
      comments: [] // Add empty comments array
    };

    // Save to localStorage
    const vents = JSON.parse(localStorage.getItem('vents')) || [];
    localStorage.setItem('vents', JSON.stringify([...vents, newVent]));
    setVentText('');
  };

  return (
   <section className={`w-full h-screen backdrop-blur-[10px] fixed z-50 top-0 left-0 flex items-center justify-center ${classname}`}>
     <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-4 items-center md:min-w-3xl min-w-sm">
      <div onClick={onClose}  className='bg-white text-[30px] p-5 text-purple-400 rotate-45 rounded-full w-[40px] h-[40px] flex
       items-center justify-center cursor-pointer absolute ml-[23rem] -mt-[2rem] shadow-2xl md:ml-[48rem]'>+</div>
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
        onClick={onClose}
      >
        Post Vent
      </button>
    </form>
   </section>
  );
}