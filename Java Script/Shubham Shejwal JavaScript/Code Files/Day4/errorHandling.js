function fetchWithErrorHandling() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/invalid-url';
    const messageElement = document.getElementById('message');

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                return response.json();
            }
        })
        .then(data => {
            messageElement.textContent = `Data fetched successfully: ${JSON.stringify(data)}`;
        })
        .catch(error => {
            messageElement.textContent = `Error: ${error.message}`;
            console.error('Error:', error);
        });
}