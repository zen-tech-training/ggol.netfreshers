const hoverDiv = document.getElementById('hoverDiv');
const hoverText = document.getElementById('hoverText');

hoverDiv.addEventListener('mouseover', function() {
    hoverText.textContent = 'You are hovering over the box!';
});

hoverDiv.addEventListener('mouseout', function() {
    hoverText.textContent = 'Hover over the box to change this text.';
});