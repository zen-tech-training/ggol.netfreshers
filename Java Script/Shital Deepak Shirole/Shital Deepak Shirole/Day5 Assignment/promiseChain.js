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

task1().
    then((res) => {
        console.log(res);
        task2().then((res) => {
            console.log(res);
            task3().then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        });
    }).catch((err) => {
        console.log(err);
    })