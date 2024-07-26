/*
(1)tell your document what to do,, like on line 8 ->  document load zala ki loadDoc() function execute kar

(2)describing function to display our data becoz that is not going to happen explicitly

(3) defining loadDoc function-->
I)url konta ahe
II)messenger kon ahe
III)onreadystate ky karaych
IV)jr document complete ahe ani status code ok ahe tr parse kara jo pn kahi repsonse alay tyala ani show kara
V)open the request and send it

*/
function makeGetRequest(){

    
    document.onreadystatechange = loadDoc();

        // function showArr(arr){
        //     var out = "";
        //     for(var i in arr){
        //         out += "<br/>"+arr[i].userId+" "+arr[i].id+" "+arr[i].title;
        //     }

        //     document.getElementById('response').innerHTML = out;
        // }
        function loadDoc(){
            var url = 'https://jsonplaceholder.typicode.com/posts/1';
            var xhttp =new XMLHttpRequest;

            //handling event change for request
            xhttp.onreadystatechange = function(){
                if(xhttp.readyState===4 && xhttp.status===200){
                            document.getElementById('response').innerHTML =xhttp.responseText;

                }
        }
            xhttp.open('GET',url,true);
            xhttp.send();
    }
    //    document.onreadystatechange = loadDoc();
}