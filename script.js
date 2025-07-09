document.addEventListener('DOMContentLoaded', function() {
  // Comment system functionality
  const commentForm = document.getElementById('commentForm');
  const commentContainer = document.getElementById('commentContainer');
  
  // Load saved comments when page loads
  loadComments();

  commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('commentName').value.trim();
    const email = document.getElementById('commentEmail').value.trim();
    const comment = document.getElementById('commentText').value.trim();

    if (name && email && comment) {
      const commentObj = {
        name,
        email,
        comment,
        date: new Date().toLocaleString()
      };

      // Add to UI
      addCommentToUI(commentObj);
      
      // Save to local storage
      saveComment(commentObj);
      
      // Reset form
      commentForm.reset();
    }
  });

  function addCommentToUI(comment) {
    const commentElement = document.createElement('div');
    commentElement.className = 'comment-item';
    commentElement.innerHTML = `
      <div class="comment-header">
        <h4>${comment.name}</h4>
        <span class="comment-date">${comment.date}</span>
      </div>
      <p class="comment-text">${comment.comment}</p>
    `;
    commentContainer.prepend(commentElement);
  }

  function saveComment(comment) {
    let comments = JSON.parse(localStorage.getItem('blog-comments')) || [];
    comments.unshift(comment); // Add new comment to beginning
    localStorage.setItem('blog-comments', JSON.stringify(comments));
  }

  function loadComments() {
    const comments = JSON.parse(localStorage.getItem('blog-comments')) || [];
    comments.forEach(comment => addCommentToUI(comment));
  }

  // Mobile menu toggle (keep your existing menu code if needed)
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
});