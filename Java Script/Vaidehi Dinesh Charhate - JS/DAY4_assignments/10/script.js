function add_div(){
    

    const myDiv = document.createElement('div');
    myDiv.textContent = 'Hello, World!';
    document.body.appendChild(myDiv);

    // const div = document.createElement("div");
    // div.innerText = "Hello World!";
    // document.body.appendChild(div);
    console.log('working');

}
document.onload = add_div();