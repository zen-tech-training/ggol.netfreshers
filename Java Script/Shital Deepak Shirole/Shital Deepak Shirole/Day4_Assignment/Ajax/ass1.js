function makeGetRequest() {
    var url = "https://jsonplaceholder.typicode.com/posts/1";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                document.getElementById('response').innerHTML = xhttp.response;
            }
        }




    }
    xhttp.open('GET', url, true);
    xhttp.send();
}