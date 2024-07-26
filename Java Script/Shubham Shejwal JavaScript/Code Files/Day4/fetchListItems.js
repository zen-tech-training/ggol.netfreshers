function fetchListOfItems() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const itemListElement = document.getElementById('itemList');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const listItemElement = document.createElement('li');
                listItemElement.textContent = `Title: ${item.title}, Body: ${item.body}`;
                itemListElement.appendChild(listItemElement);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}