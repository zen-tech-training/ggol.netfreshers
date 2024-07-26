async function fetchData() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Data fetched!");
  }