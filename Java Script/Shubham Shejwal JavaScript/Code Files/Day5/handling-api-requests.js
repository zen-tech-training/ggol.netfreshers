async function getUserData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const userData = await response.json();
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  }