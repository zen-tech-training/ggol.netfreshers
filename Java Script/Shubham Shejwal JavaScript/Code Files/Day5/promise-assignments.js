// 1. Basic Promise
function wait(ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Completed after ${ms} milliseconds`);
      }, ms);
    });
  }
  
  function testWait(ms) {
    wait(ms).then(result => alert(result));
  }
  
  // 2. Promise Chaining
  function task1() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Task 1 complete");
      }, 1000);
    });
  }
  
  function task2() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Task 2 complete");
      }, 2000);
    });
  }
  
  function task3() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Task 3 complete");
      }, 1500);
    });
  }
  
  function runChainedTasks() {
    task1()
      .then(result => {
        alert(result);
        return task2();
      })
      .then(result => {
        alert(result);
        return task3();
      })
      .then(result => {
        alert(result);
      });
  }
  
  // 3. Handling Errors
  function errorProneTask() {
    return new Promise((resolve, reject) => {
      const randomBoolean = Math.random() < 0.5;
      setTimeout(() => {
        if (randomBoolean) {
          resolve("Task completed successfully!");
        } else {
          reject("Error: Task failed!");
        }
      }, 1000);
    });
  }
  
  function runErrorProneTask() {
    errorProneTask()
      .then(result => {
        alert(result);
      })
      .catch(error => {
        alert(error);
      });
  }
  
  // 4. Using Promise.all()
  function taskA() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Task A complete");
      }, 1000);
    });
  }
  
  function taskB() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Task B complete");
      }, 2000);
    });
  }
  
  function taskC() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Task C complete");
      }, 1500);
    });
  }
  
  function runConcurrentTasks() {
    Promise.all([taskA(), taskB(), taskC()])
      .then(results => {
        alert(results);
      })
      .catch(error => {
        alert(error);
      });
  }