
    var task1= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task1 completed")
        },1000)
    })


    var task2= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Task 2 completed")
        },500)
    })


    var task3= new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("Task 3 completed")
        },200)
       
    })




Promise.all([task1,task2,task3]).then((value)=>{
    console.log(value);
}).catch((err)=>{
    console.log("Error",err);
})

