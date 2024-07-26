function overloaded() {
    switch (arguments.length) {
      case 2:
        if (typeof arguments[0] === "string" && typeof arguments[1] === "number") {
          return twonumbers(arguments[0], arguments[1]);
        } else if (typeof arguments[0] === "number" && typeof arguments[1] === "number") {
          return twonumbers(arguments[0], arguments[1]);
        }
        break;
      case 3:
        if (typeof arguments[0] === "number" && typeof arguments[1] === "number" && typeof arguments[2] === "number") {
          return threenumbers(arguments[0], arguments[1], arguments[2]);
        } else {
          return twonumbers(arguments[0], arguments[1]);
        }
        break;
      default:
        return "Unsupported combination of arguments";
    }
  }
  
  function twonumbers(arg1, arg2) {
    // Implement your logic for twonumbers function here
    // For demonstration purposes, just returning the arguments
    return [arg1, arg2];
  }
  
  function threenumbers(arg1, arg2, arg3) {
    // Implement your logic for threenumbers function here
    // For demonstration purposes, just returning the arguments
    return [arg1, arg2, arg3];
  }
  
  console.log(overloaded("Shubham", "Shejwal"));
  console.log(overloaded(10, 20));
  console.log(overloaded(10, 20, 30));
  console.log(overloaded("Shubham", "age"));