import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import { getTechPosts, getTechComments } from './services/techData';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch initial data when component mounts
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch technology posts and comments
        const [postsData, commentsData] = await Promise.all([
          getTechPosts(),
          getTechComments()
        ]);

        setPosts(postsData);
        setComments(commentsData);
      } catch (err) {
        setError('Failed to load blog data. Please try again later.');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // Handle adding new comments
  const handleAddComment = async (postId, commentData) => {
    // Create a new comment object with proper structure
    const newComment = {
      ...commentData,
      postId: postId,
      id: Date.now(), // Simple ID for demo purposes
    };

    try {
      // Add comment to local state immediately for better UX
      setComments(prevComments => [...prevComments, newComment]);

      // In a real app, you would also send this to the server
      // await apiService.postComment(postId, commentData);
    } catch (err) {
      console.error('Error adding comment:', err);
      // Remove the comment from state if the API call fails
      setComments(prevComments =>
        prevComments.filter(comment => comment.id !== newComment.id)
      );
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-secondary-50 flex items-center justify-center">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <h2 className="mt-2 text-lg font-medium text-secondary-900">Something went wrong</h2>
          <p className="mt-1 text-sm text-secondary-500">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <BlogList
          posts={posts}
          comments={comments}
          onAddComment={handleAddComment}
          loading={loading}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
