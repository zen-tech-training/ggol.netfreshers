
    const myList = document.getElementById('myList');
    const addItemButton = document.getElementById('addItemButton');
    let itemCount = 1; 

    addItemButton.addEventListener('click', ()=>{
        const newItem = document.createElement('li');
        newItem.textContent = `Item ${itemCount}`;
        myList.appendChild(newItem);
        itemCount++; 
    });

