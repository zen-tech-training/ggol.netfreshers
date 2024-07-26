document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Original paragraph';
    document.body.appendChild(paragraph);

    const button = document.createElement('button');
    button.textContent = 'Clone and modify';
    document.body.appendChild(button);

    let cloneCount = 1;

    button.onclick = () => {
        const clone = paragraph.cloneNode(true);
        clone.textContent = `Cloned paragraph ${cloneCount}`;
        document.body.appendChild(clone);
        cloneCount++;
    };
});