function flattenArray(arr) {
    let result = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = result.concat(flattenArray(element));
        } else {
            result.push(element);
        }
    });
    return result;
}
var nestedArray = [1, [2, 3], [4, [5, 6]]];
var result = flattenArray(nestedArray);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]