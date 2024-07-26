function task1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Task1 completed');
        }, 3000);
    });
};

function task2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Task2 completed');
        }, 1000);
    });
};

function task3() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Task3 completed');
        }, 4000);
    });
};

Promise.all([task1(),task2(),task3()])
.then((values) =>{
    console.log(values);
})
.catch(err =>{
    console.error('Error '+err);
})