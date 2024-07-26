let imageIndex = 1;

function changeImage() {
    const myImage = document.getElementById('myImage');
    imageIndex = (imageIndex % 2) + 1; // toggle between 1 and 2
    myImage.src = `image${imageIndex}.jpg`;
}