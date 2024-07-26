const cloneButton = document.getElementById('cloneButton');
const originalParagraph = document.getElementById('originalParagraph');

cloneButton.addEventListener('click', () => {
        
    const clonedParagraph = originalParagraph.cloneNode(true);
    clonedParagraph.textContent = "Abracadabra! I'm a clone! 🧙‍♂️";       
    document.body.appendChild(clonedParagraph);
});