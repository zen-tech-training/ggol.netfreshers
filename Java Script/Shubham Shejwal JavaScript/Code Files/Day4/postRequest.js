function makePostRequest() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const data = {
        title: 'New Post',
        body: 'This is a new post',
        userId: 1
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        const postResponseElement = document.getElementById('postResponse');
        postResponseElement.textContent = `Post created with ID: ${data.id}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}