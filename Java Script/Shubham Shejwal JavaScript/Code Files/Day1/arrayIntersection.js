function intersect(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                arr3.push(arr1[i]);
            }
        }
    }
    return arr3;
}
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let result = intersect(arr1, arr2);
console.log(result); // Output: [3, 4]