function largest(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let array = [4, 7, 2, 4, 8, 0, 1, 10, 15, 6, 17];
let lar = largest(array);
console.log(lar);