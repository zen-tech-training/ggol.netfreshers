function addListItem() {
    const list = document.getElementById('myList');
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    list.appendChild(newItem);
  }