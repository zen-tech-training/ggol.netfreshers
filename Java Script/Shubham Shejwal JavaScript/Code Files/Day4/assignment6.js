let isVisible = true;

function toggleVisibility() {
    const toggleDiv = document.getElementById('toggleDiv');
    if (isVisible) {
        toggleDiv.style.display = 'none';
        isVisible = false;
    } else {
        toggleDiv.style.display = 'block';
        isVisible = true;
    }
}