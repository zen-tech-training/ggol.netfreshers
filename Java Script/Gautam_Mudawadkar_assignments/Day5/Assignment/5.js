function wait(ms)
{
    return new Promise(function(resolve){
       setTimeout(()=>{
        resolve("Completed in "+ms+" secs")
       },ms)
    })
}


wait(1000).then((resolve)=> console.log(resolve)).catch((err) =>console.log(err))
wait(500).then((resolve)=> console.log(resolve)).catch((err) =>console.log(err))
