function RemoveItem(){
    var ele=document.getElementById('Mylist');
    var count=ele.childNodes.length;
    if(ele.hasChildNodes()){
        ele.removeChild(ele.children[count-1]);
    }
}

