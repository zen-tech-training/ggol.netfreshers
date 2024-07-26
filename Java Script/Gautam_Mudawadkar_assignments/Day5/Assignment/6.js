function task1()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Task1 completed")
        },1000)
    })
}

function task2()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task 2 completed")
        },500)
    })
}
function task3()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve("Task 3 completed")
        },200)
       
    })
}



task1().then((mess)=>{
    console.log(mess)
    return task2();
}).then((mess)=>{
    console.log(mess)
    return task3();
}).then((mess)=>{
    console.log(mess)
}).catch((err)=>{
    console.log(err)
})


