import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function CommentSection({ vent, onCommentAdded }) {
  const [commentText, setCommentText] = useState('');
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      id: Date.now(),
      text: commentText,
      author: user?.email || 'Anonymous',
      userId: user?.id,
      timestamp: new Date().toISOString()
    };

    onCommentAdded(vent.id, newComment);
    setCommentText('');
  };

  return (
    <div className="mt-4 border-t border-gray-300 pt-3">
      <div className="space-y-3 mb-4">
        {vent.comments?.map(comment => (
          <div key={comment.id} className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm">{comment.text}</p>
            <div className="text-xs text-gray-500 mt-1">
              {comment.author} • {new Date(comment.timestamp).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 p-2  rounded text-sm border-0 outline-0"
          required
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
        >
          Post
        </button>
      </form>
    </div>
  );
}