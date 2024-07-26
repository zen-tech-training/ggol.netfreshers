function fetchListOfItems() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not OK (status ${response.status})`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then((data) => {
            // Assuming the response contains an array of items
            const itemList = document.getElementById('itemList');

            data.forEach((item) => {
                const listItem = document.createElement('li');
                listItem.textContent = item.name; // Adjust this based on your data structure
                itemList.appendChild(listItem);
            });

            // Append the list to a container (e.g., a div with id "itemListContainer")
            const container = document.getElementById('itemListContainer');
            container.appendChild(itemList);
        })
        .catch((error) => {
            console.error('Error fetching data:', error.message);
            // Display an error message or handle the error gracefully
        });
};

// fetchAndDisplayItems();
