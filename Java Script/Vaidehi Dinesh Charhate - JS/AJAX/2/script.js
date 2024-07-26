function fetchJsonData(){
        document.onreadystatechange = loadDoc();
        function showTitle(arr){
            var out = "";
            for(var i in arr){
                out += "<br/>"+arr[i].id+arr[i].title;
            }

            document.getElementById('title').innerHTML = out;
        }
        function showBody(arr){
            var out = "";
            for(var i in arr){
                out += "<br/>"+arr[i].id+arr[i].body;
            }

            document.getElementById('body').innerHTML = out;
        }
        function loadDoc(){
            var url = 'https://jsonplaceholder.typicode.com/posts';
            var xhttp =new XMLHttpRequest;

            //handling event change for request
            xhttp.onreadystatechange = function(){
                if(xhttp.readyState===4 && xhttp.status===200){
                    var jsonArr = JSON.parse(xhttp.responseText);
                    showTitle(jsonArr);
                    showBody(jsonArr);
                }
        }
            xhttp.open('GET',url,true);
            xhttp.send();
}}
    
