
function fetchJsondata() {

    document.onreadystatechange = loadDoc();
    function loadDoc() {
        // create
        var url = "https://jsonplaceholder.typicode.com/posts";
        var xhttp = new XMLHttpRequest()
        //configure
        xhttp.open('GET', url, true);
        // set
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4) {
                console.log("dhjfggsh");
                if (xhttp.status === 200) {
                    console.log("sdsdb");
                    var text = JSON.parse(xhttp.responseText);
                    showArr(text);
                    
                }
            }
        }
        //send
        xhttp.send();

        console.log("end ")

    }

}

function showArr(text){
    var title="";
    // var body="";
    // var id='';
    for(var i in text){
        // console.log("text"+text[i].title);
        // console.log("body"+text[i].body);
        title+="<br>"+text[i].title+" "+text[i].body+" "+text[i].id;
       
    }
    // console.log("end 1");
    // console.log(title);
    // console.log(body);
    document.getElementById('title').innerHTML=title;
    // document.getElementById('body').innerHTML=body;
    // document.getElementById('userId').innerHTML=id;
}
