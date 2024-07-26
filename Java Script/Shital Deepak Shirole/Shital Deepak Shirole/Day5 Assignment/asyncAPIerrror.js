import fetch from "node-fetch";

async function getUserData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1').then((res)=>{
            return response.json();
        }).catch(err){
        };
        
    }
    catch(err){
        console.log(err);
    }
}

console.log(getUserData());