const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Generic fetch function with error handling
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

// Fetch all blog posts
export const fetchPosts = async () => {
  return fetchData(`${API_BASE_URL}/posts`);
};

// Fetch a specific post by ID
export const fetchPost = async (postId) => {
  return fetchData(`${API_BASE_URL}/posts/${postId}`);
};

// Fetch all comments
export const fetchComments = async () => {
  return fetchData(`${API_BASE_URL}/comments`);
};

// Fetch comments for a specific post
export const fetchPostComments = async (postId) => {
  return fetchData(`${API_BASE_URL}/posts/${postId}/comments`);
};

// Fetch user information
export const fetchUser = async (userId) => {
  return fetchData(`${API_BASE_URL}/users/${userId}`);
};

// Simulate posting a new comment (JSONPlaceholder doesn't actually save data)
export const postComment = async (postId, commentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Post comment error:', error);
    throw error;
  }
};

// API service object with all methods
const apiService = {
  fetchPosts,
  fetchPost,
  fetchComments,
  fetchPostComments,
  fetchUser,
  postComment,
};

export default apiService;
