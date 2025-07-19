import { useState, useEffect, useContext } from "react";
import { Icon } from "@iconify/react";
import { AuthContext } from "../../context/AuthContext";
import CommentSection from "../CommentSection";

export default function VentList() {
  const [vents, setVents] = useState([]);
  const { user } = useContext(AuthContext);
  const [expandedVent, setExpandedVent] = useState(null);

  // Initialize with sample data if empty
  useEffect(() => {
    const storedVents = JSON.parse(localStorage.getItem('vents')) || [];
    
    // If no vents exist, create sample data
    if (storedVents.length === 0) {
      const sampleVents = [
        {
          id: 1,
          text: "Feeling excited about my new project!",
          author: "user1@example.com",
          userId: 101,
          timestamp: new Date().toISOString(),
          votes: []
        },
        {
          id: 2,
          text: "Having a rough day today...",
          author: "user2@example.com",
          userId: 102,
          timestamp: new Date().toISOString(),
          votes: []
        }
      ];
      localStorage.setItem('vents', JSON.stringify(sampleVents));
      setVents(sampleVents);
    } else {
      // Ensure all vents have votes array
      const normalizedVents = storedVents.map(vent => ({
        ...vent,
        votes: Array.isArray(vent.votes) ? vent.votes : []
      }));
      setVents(normalizedVents);
    }
  }, []);

  const handleVote = (ventId, voteType) => {
    const updatedVents = vents.map(vent => {
      if (vent.id === ventId) {
        const votes = vent.votes;
        const userVote = votes.find(v => v.userId === user?.id);
        
        if (userVote?.type === voteType) {
          return {
            ...vent,
            votes: votes.filter(v => v.userId !== user?.id)
          };
        }
        
        return {
          ...vent,
          votes: [
            ...votes.filter(v => v.userId !== user?.id),
            { userId: user?.id, type: voteType }
          ]
        };
      }
      return vent;
    });

    setVents(updatedVents);
    localStorage.setItem('vents', JSON.stringify(updatedVents));
  };

  const countVotes = (vent, type) => {
    return vent.votes.filter(v => v.type === type).length;
  };

  const getUserVote = (vent) => {
    if (!user) return null;
    return vent.votes.find(v => v.userId === user.id)?.type;
  };

  const handleAddComment = (ventId, newComment) => {
  const updatedVents = vents.map(vent => {
    if (vent.id === ventId) {
      return {
        ...vent,
        comments: [...(vent.comments || []), newComment]
      };
    }
    return vent;
  });
  setVents(updatedVents);
  localStorage.setItem('vents', JSON.stringify(updatedVents));
};

  return (
    <div className="space-y-4">
      {vents.map(vent => {
        const userVote = getUserVote(vent);
        const likes = countVotes(vent, 'like');
        const dislikes = countVotes(vent, 'dislike');

        return (
          <div key={vent.id} className="bg-white p-4 rounded-lg shadow">
            {/* Vent Text */}
            <p className="text-gray-800">{vent.text}</p>
            
            {/* Author and Voting */}
            <div className="text-sm text-gray-500 mt-3 w-full flex justify-between items-center">
              <div className="flex items-start flex-col">
                <span>
                {new Date(vent.timestamp).toLocaleString()}
              </span>

                <button 
                      onClick={() => setExpandedVent(expandedVent === vent.id ? null : vent.id)}
                      className="text-sm text-blue-500 mt-2"
                    >
                      {expandedVent === vent.id ? 'Hide comments' : `Show comments (${vent.comments?.length || 0})`}
                    </button>
              </div>

              
              
              <div className="flex gap-3 items-center">
                {/* Like Button */}
                <button 
                  onClick={() => handleVote(vent.id, 'like')}
                  className="flex items-center gap-1 transition-colors"
                  disabled={!user}
                >
                  <Icon 
                    icon="fluent:thumb-like-24-filled" 
                    width="20" 
                    className={
                      userVote === 'like' ? "text-green-500" : 
                      userVote ? "text-gray-300" : "text-gray-400 hover:text-green-500"
                    }
                  />
                  <span>{likes}</span>
                </button>
                
                {/* Dislike Button */}
                <button 
                  onClick={() => handleVote(vent.id, 'dislike')}
                  className="flex items-center gap-1 transition-colors"
                  disabled={!user}
                >
                  <Icon 
                    icon="fluent:thumb-dislike-24-filled" 
                    width="20" 
                    className={
                      userVote === 'dislike' ? "text-red-500" : 
                      userVote ? "text-gray-300" : "text-gray-400 hover:text-red-500"
                    }
                  />
                  <span>{dislikes}</span>
                </button>
              </div>
            </div>
            {/* Comment section */}
              {expandedVent === vent.id && (
                <CommentSection 
                  vent={vent} 
                  onCommentAdded={handleAddComment}
                />
              )}
          </div>
        );
      })}
    </div>
  );
}