function wait(ms)
{
    return new Promise(function(resolve,reject){
        var success=Math.round(Math.random());
       setTimeout(()=>{
        if(success)
        {
        resolve("Completed in "+ms+" secs")
        }

        else reject("Failure")
       },ms)
    })
}


wait(500).then((resolve)=> console.log(resolve)).catch((err) =>console.log(err))

