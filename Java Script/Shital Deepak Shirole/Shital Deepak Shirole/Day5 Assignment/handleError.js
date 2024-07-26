var f = true;
function errorProneTask(){
    return new Promise((res,rej)=>{
        if (f){
            f  = false;
            res("Resolved");
        }
        else{
            f = true;
            rej('Rejected');
        }
    })
}

try{
    console.log(errorProneTask());
}
catch(err){
    console.log(err);
}