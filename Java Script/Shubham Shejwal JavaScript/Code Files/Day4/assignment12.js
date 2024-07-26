document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.createElement('input');
    const button = document.createElement('button');
    button.textContent = 'Toggle Border Color';

    button.onclick = () => {
        inputField.classList.toggle('border-color');
    };

    document.body.appendChild(inputField);
    document.body.appendChild(button);
});