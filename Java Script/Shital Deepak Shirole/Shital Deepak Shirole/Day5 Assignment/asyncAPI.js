import fetch from "node-fetch";

async function getUserData(){

    await fetch('https://jsonplaceholder.typicode.com/users/1').then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
}

getUserData();