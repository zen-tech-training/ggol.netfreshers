function fetchJsonData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const titleElement = document.getElementById('title');
            const bodyElement = document.getElementById('body');

            titleElement.textContent = `Title: ${data.title}`;
            bodyElement.textContent = `Body: ${data.body}`;
        })
        .catch(error => console.error('Error:', error));
}