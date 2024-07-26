function objectToArray(obj) {
    return Object.entries(obj);
}
let obj = { name: 'John', age: 30 };
let result = objectToArray(obj);
console.log(result); // Output: [['name', 'John'], ['age', 30]]