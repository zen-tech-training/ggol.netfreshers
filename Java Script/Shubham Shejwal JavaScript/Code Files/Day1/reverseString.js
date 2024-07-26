function reverse(str) {
    let x = "";
    for (let i = str.length - 1; i >= 0; i--) {
        x = x + str[i];
    }
    return x;
}
let string = "Hello i am shubham";
let reversed = reverse(string);
console.log(reversed);