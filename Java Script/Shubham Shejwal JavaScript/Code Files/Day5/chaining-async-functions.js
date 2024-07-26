async function fetchPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      return await response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  
  async function fetchComments(postId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  }
  
  async function fetchAllData() {
    try {
      const posts = await fetchPosts();
      const comments = await fetchComments(1);
      console.log('Posts:', posts);
      console.log('Comments:', comments);
    } catch (error) {
      console.error('Error fetching all data:', error);
    }
  }