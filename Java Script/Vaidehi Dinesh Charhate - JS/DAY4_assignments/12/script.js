// var btn = document.getElementById('btn').onclick(function(){
//     var text = document.getElementById('changeClass');
//     text.classList.add.
// })
console.log('working');
// const inputField = document.getElementById('myInput');
// const toggleButton = document.getElementById('myButton');

// toggleButton.addEventListener('click', () => {
//         inputField.classList.toggle('highlight-border');
// });
document.addEventListener('click', function handleClick(event) {
    event.target.classList.add('bg-yellow');
  });