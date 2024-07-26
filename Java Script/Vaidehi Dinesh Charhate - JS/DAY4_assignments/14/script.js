const myTable = document.getElementById('myTable');

    
    for (let i = 1; i <= 3; i++) {
        const row = document.createElement('tr');
        for (let j = 1; j <= 3; j++) {
            const cell = document.createElement('td');
            const number = (i - 1) * 3 + j;
            cell.textContent = number;
            row.appendChild(cell);
        }
        myTable.appendChild(row);
    }