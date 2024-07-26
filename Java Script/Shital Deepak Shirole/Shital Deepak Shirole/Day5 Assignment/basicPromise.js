function wait(ms){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(`Completed after ${ms} milliseconds`);
        },ms)
    });
};

wait(3000).
then((res)=>{
    console.log(res);
}).
catch((err)=>{
    console.log(err);
})