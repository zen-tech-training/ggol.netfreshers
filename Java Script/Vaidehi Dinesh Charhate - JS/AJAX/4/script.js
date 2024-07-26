document.getElementById('btnAdd').onclick = function(){

    var url = 'https://jsonplaceholder.typicode.com/posts';
    var xhttp = new XMLHttpRequest();

   
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState === 4 && xhttp.status === 201){
          console.log(xhttp.response);
        }
    }
   
    xhttp.open('POST',url,true);
    xhttp.setRequestHeader('Content-Type','application/json;charset=UTF-8');
    
    xhttp.send(document.getElementById('postResponse').innerHTML = JSON.stringify({
        userId:1,
        title:'Newly added Title',
        body:'Some Description about my newly added title!'
    }));
}