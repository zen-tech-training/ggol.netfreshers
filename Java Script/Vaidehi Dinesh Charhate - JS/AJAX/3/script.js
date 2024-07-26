function makeGetRequest(url) {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Configure the request
    xhr.open('GET', url, true);

    // Set up event listeners for success and error
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Request was successful; handle the response here
            const responseData = JSON.parse(xhr.responseText);
            console.log('Received data:', responseData);
            document.getElementById('message').innerHTML=responseData;
        } else {
            // Something went wrong; display an error message
            console.error('Error:', xhr.statusText);
        }
    };

    xhr.onerror = function () {
        // Network error or other issues
        console.error('Network error occurred.');
    };

    // Send the request
    xhr.send();
}

// Example usage:
const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your API endpoint
makeGetRequest(apiUrl);
