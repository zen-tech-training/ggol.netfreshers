function removeListItem(){
    // var last = listItems[listItems.length -1];
    // last.parentNode.removeChild(last);

    // document.getElementById('myList').removeChild(myList.length -1);
    
    const myList = document.getElementById("myList");
    const lastItem = myList.querySelector("li:last-child");
    lastItem.remove();

}