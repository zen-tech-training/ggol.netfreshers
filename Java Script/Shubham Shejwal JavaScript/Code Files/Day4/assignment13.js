document.addEventListener('DOMContentLoaded', () => {
    const list = document.createElement('ul');
    const button = document.createElement('button');
    button.textContent = 'Add Item';

    let itemCount = 1;

    button.onclick = () => {
        const listItem = document.createElement('li');
        listItem.textContent = `Item ${itemCount}`;
        list.appendChild(listItem);
        itemCount++;
    };

    document.body.appendChild(list);
    document.body.appendChild(button);
});