async function getUserDataWithError() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/invalid-url');
      const userData = await response.json();
      console.log(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }