function addListItem(){
    // document.getElementById('myList').append('<li>Item 3</li>')  ;
    var li = document.createElement("li");
    li.innerHTML = "Item 3";
    document.getElementById("myList").appendChild(li);
}

