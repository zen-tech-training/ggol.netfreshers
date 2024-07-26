/*
1 Basic Promise
Write a function that returns a promise which resolves after a specified time with a success message.

Instructions:
1. Create a function `wait(ms)` that returns a promise.
2. The promise should resolve with a message "Completed after X milliseconds" where `X` is the input to the function.
3. Test the function by calling it with different time values and logging the result.
*/

function wait(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 1000) {
      reject(`This operation will take more than ${ms} milliseconds.`);
    } else {
      setTimeout(() => {
        resolve(`Completed after ${ms} milliseconds.`);
      }, ms);
    }
  });
}

wait(2000)
  .then((message) => {
    console.log(message);
  })
  .catch((err) => console.error(err));

/*
2: Promise Chaining
Create a series of functions that return promises and chain them together to perform a sequence of async operations.

Instructions:
1. Create three functions `task1() `, `task2()`, and `task3()` that return promises.
2. Each function should resolve after a certain time with a specific message (e.g., "Task 1 complete").
3. Chain these functions together so they execute in sequence.
4. Log each task’s completion message.
*/

function task1(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 1000) {
      reject(`This operation will take more than ${ms} milliseconds.`);
    } else {
      setTimeout(() => {
        resolve(`Task 1 is completed after ${ms} milliseconds.`);
      }, ms);
    }
  });
}

function task2(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 1000) {
      reject(`This operation will take more than ${ms} milliseconds.`);
    } else {
      setTimeout(() => {
        resolve(`Task 2 is completed after ${ms} milliseconds.`);
      }, ms);
    }
  });
}

function task3(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 1000) {
      reject(`This operation will take more than ${ms} milliseconds.`);
    } else {
      setTimeout(() => {
        resolve(`Task 3 is completed after ${ms} milliseconds.`);
      }, ms);
    }
  });
}

task1(2500)
  .then((message) => {
    console.log(message);
  })
  .catch((err) => console.error(err));

task2(3000)
  .then((message) => {
    console.log(message);
  })
  .catch((err) => console.error(err));

task3(2000)
  .then((message) => {
    console.log(message);
  })
  .catch((err) => console.error(err));

/*
  output will be:
  task 3 is completed after 2000 milliseconds.
  task 1 is completed after 2500 milliseconds.
  task 2 is completed after 3000 milliseconds.
*/

task1(2500)
  .then((message) => {
    console.log(message);
    return task2(3000);
  })
  .then((message) => {
    console.log(message);
    return task3(4000);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

/*
  output will be:
  task 1 (after x sec)
  task 2 (after an additional y sec, so total x+y seconds)
  task 3 (after an additional z sec, so total x+y+z seconds)
*/

/*
3: Handling Errors
Write a promise that simulates an error condition and handle it using `catch()`.

Instructions:
1. Create a function `errorProneTask()` that returns a promise.
2. The promise should randomly either resolve with a success message or reject with an error message.
3. Handle both the success and error cases using `then()` and `catch()`.
*/

function errorProneTask() {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() * 0.5;
    if (isSuccess > 0.3) {
      reject(`Task failed with an error.`);
    } else {
      resolve(`Task completed successful.`);
    }
  });
}

errorProneTask()
  .then((message) => {
    console.log(message);
  })
  .catch((err) => console.error(err));

/*
Assignment 4: Using `Promise.all()`
Create multiple promises and use `Promise.all()` to wait for all of them to complete.

Instructions:
1. Create three functions `taskA()`, `taskB()`, and `taskC()` that return promises.
2. Each function should resolve after a certain time with a specific message.
3. Use `Promise.all()` to execute these tasks concurrently and log the results once all tasks are complete.
*/

function taskA(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task A Successful");
    }, ms);
  });
}
function taskB(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task B Successful");
    }, ms);
  });
}
function taskC(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task C Successful");
    }, ms);
  });
}

Promise.all([taskA(1500), taskB(900), taskC(2000)])
  .then((messages) => {
    messages.forEach((message) => console.log(message));
  })
  .catch((err) => console.error(err));

/*
Async Await Assignments

Assignment 1: Basic Async/Await
Understand how to use async/await with simple functions.

Instructions:
1. Create an async function named `fetchData`.
2. Inside the function, use `setTimeout` to simulate fetching data from a server. Use `await` to wait for 2 seconds.
3. After 2 seconds, log a message to the console saying, "Data fetched!".
4. Call the `fetchData` function and observe the output.
*/

async function fetchData(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
  console.log(`Data's been fetched after ${ms} milliseconds`);
}

fetchData(2000);

/*
Assignment 2: Handling API Requests
Use async/await to handle real API requests.

Instructions:
1. Create an async function named `getUserData`.
2. Use the `fetch` API to make a GET request to `https://jsonplaceholder.typicode.com/users/1`.
3. Use `await` to wait for the response and convert it to JSON.
4. Log the user data to the console.
5. Call the `getUserData` function and observe the output.
*/

async function getUserData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const userData = await response.json();
    console.log(`userData`, userData);
  } catch (err) {
    console.error(err);
  }
}

getUserData();

/*
Assignment 3: Error Handling
Handle errors in async functions using try/catch.

Instructions:
1. Modify the `getUserData` function from Assignment 2.
2. Wrap the `fetch` call and the subsequent code in a try/catch block.
3. In the catch block, log an error message to the console if the request fails.
4. Test the function by modifying the URL to an invalid one and observing the output.
*/

async function getUserData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1/invalidlink"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
}

getUserData();

/*
Assignment 4: Chaining Async Functions
Chain multiple async functions together.

Instructions:
1. Create two async functions, `fetchPosts` and `fetchComments`.
2. In `fetchPosts`, use the `fetch` API to get posts from `https://jsonplaceholder.typicode.com/posts`.
3. In `fetchComments`, use the `fetch` API to get comments for a specific post from `https://jsonplaceholder.typicode.com/comments?postId=1`.
4. Create a third async function named `fetchAllData` that uses `await` to call both `fetchPosts` and `fetchComments`.
5. Log the combined data from both functions to the console.
6. Call `fetchAllData` and observe the output.
*/

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const userPosts = await res.json();
  return userPosts;
}

async function fetchComments(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  const userComments = await res.json();
  return userComments;
}

async function fetchAllData() {
  const posts = await fetchPosts();
  const comments = await fetchComments(1);
  const combinedData = {
    allPosts: posts,
    allComments: comments,
  };
  console.log(`posts`, posts);
  console.log(`comments`, comments);
  console.log(combinedData);
}

fetchAllData();

/*
Assignment 5: Parallel Execution
Execute multiple asynchronous operations in parallel using `Promise.all`.

Instructions: 
1. Modify the `fetchAllData` function from Assignment 4.
2. Instead of awaiting each function one after another, use `Promise.all` to execute `fetchPosts` and `fetchComments` in parallel.
3. Log the combined data to the console once both promises are resolved.
4. Call `fetchAllData` and observe the output.
*/
async function fetchPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error(`HTTP error! status ${res.status}`);
    }
    const userPosts = await res.json();
    return userPosts;
  } catch (error) {
    console.error("Error fetching posts", error);
  }
}

async function fetchComments(id) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status ${res.status}`);
    }
    const userComments = await res.json();
    return userComments;
  } catch (error) {
    console.error("Error fetching posts", error);
  }
}

async function fetchAllData() {
  try {
    const [posts, comments] = await Promise.all([
      fetchPosts(),
      fetchComments(1),
    ]);

    console.log(`posts`, posts);
    console.log(`comments`, comments);
  } catch (error) {
    console.log(error);
  }
}

fetchAllData();
