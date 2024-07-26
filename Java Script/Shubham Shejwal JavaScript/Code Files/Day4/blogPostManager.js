// Get Posts
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        console.log('Get Posts Response:');
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Create Post
  function createPost() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const newPost = {
      title: 'New Post',
      body: 'This is a new post',
      userId: 1
    };
  
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Create Post Response:');
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Delete Post
  function deletePost(id) {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(apiUrl, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        console.log('Delete Post Response:');
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Update Post
  function updatePost(id) {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const updatedPost = {
      id: id,
      title: 'Updated Post',
      body: 'This is an updated post',
      userId: 1
    };
  
    fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPost)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Update Post Response:');
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }