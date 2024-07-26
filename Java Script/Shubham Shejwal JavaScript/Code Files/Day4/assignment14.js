document.addEventListener('DOMContentLoaded', () => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    for (let i = 1; i <= 3; i++) {
        const row = document.createElement('tr');
        for (let j = 1; j <= 3; j++) {
            const cell = document.createElement('td');
            cell.textContent = `${i * (j - 1) + j}`;
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    document.body.appendChild(table);
});