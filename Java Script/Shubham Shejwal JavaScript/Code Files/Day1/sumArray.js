function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
let arr = [1, 4, 6, 8, 2, 3, 5, 7, 9, 10];
let result = sum(arr);
console.log(result);