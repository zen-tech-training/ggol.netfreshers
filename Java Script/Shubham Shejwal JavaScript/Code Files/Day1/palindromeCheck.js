function palindrome(str) {
    let start = 0;
    let end = str.length - 1;
    while (end > start) {
        if (str[start] != str[end]) {
            return false;
        } else {
            end--;
            start++;
        }
    }
    return true;
}
let x = "sshhss";
let y = "ssshsss";
let z = "sshxss";
let result1 = palindrome(x);
let result2 = palindrome(y);
let result3 = palindrome(z);
console.log(result1 + " " + result2 + " " + result3);