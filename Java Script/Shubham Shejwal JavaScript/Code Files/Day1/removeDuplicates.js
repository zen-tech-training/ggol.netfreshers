function duplicate(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (!array.includes(arr[i])) {
            array.push(arr[i]);
        }
    }
    return array;
}
let arr = [1, 1, 2, 2, 3, 3, 4, 4, 4, 5];
let result = duplicate(arr);
console.log(result);