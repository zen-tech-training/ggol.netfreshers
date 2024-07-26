function MathUtil() {}

MathUtil.add = function(a, b) {
  return a + b;
};

MathUtil.subtract = function(a, b) {
  return a - b;
};

MathUtil.multiply = function(a, b) {
  return a * b;
};

MathUtil.divide = function(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
};

console.log("Addition:", MathUtil.add(5, 3));
console.log("Subtraction:", MathUtil.subtract(5, 3));
console.log("Multiplication:", MathUtil.multiply(5, 3));
console.log("Division:", MathUtil.divide(6, 3));