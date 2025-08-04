import { useState } from 'react'
import CommentForm from './CommentForm'

const PostCard = ({ post }) => {
  const [comments, setComments] = useState([])
  const [showComments, setShowComments] = useState(false)

  const addComment = (comment) => {
    const newComment = {
      id: Date.now(),
      ...comment,
      date: new Date().toLocaleString()
    }
    setComments([newComment, ...comments])
  }

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-indigo-400 to-cyan-400"></div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.body}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>By User {post.userId}</span>
          <span>{new Date().toLocaleDateString()}</span>
        </div>

        <div className="flex gap-2">
          <button 
            className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            onClick={() => setShowComments(!showComments)}
          >
            {showComments ? 'Hide Comments' : 'View Comments'} ({comments.length})
          </button>
        </div>

        {showComments && (
          <div className="mt-6 border-t pt-6">
            <CommentForm onAddComment={addComment} />
            
            {comments.length > 0 && (
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-4">Comments ({comments.length})</h4>
                <div className="space-y-4">
                  {comments.map(comment => (
                    <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-medium text-gray-800">{comment.name}</h5>
                        <span className="text-xs text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-600">{comment.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default PostCard