function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  
  console.log(add(2, 3)); // Output: 5
  console.log(add(2, 3, 4)); // Output: 9
  console.log(add(2, 3, 4, 5)); // Output: 14