function makeGetRequest() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    const xhr = new XMLHttpRequest();

    xhr.open('GET', apiUrl, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const responseElement = document.getElementById('response');
            responseElement.textContent = `Title: ${response.title}, Body: ${response.body}`;
        }
    };

    xhr.send();
}