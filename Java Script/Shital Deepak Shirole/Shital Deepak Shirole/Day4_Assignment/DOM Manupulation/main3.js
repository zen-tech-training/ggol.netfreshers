function removeListItem(){
    // var len = document.getElementById('myList').childNodes.length;
    if (document.getElementById('myList').lastChild.nodeType===0){
        document.getElementById('myList').removeChild(document.getElementById('myList').lastChild);
    }
    else{
        document.getElementById('myList').removeChild(document.getElementById('myList').lastChild);
        document.getElementById('myList').removeChild(document.getElementById('myList').lastChild);            
    }
    // console.log(document.getElementById('myList').lastChild.nodeType);
}