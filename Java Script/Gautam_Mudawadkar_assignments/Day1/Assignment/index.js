

// 1  Write a function to reverse a given string.
function reverseString(str) {
    var newString;
    for (var i = str.length() - 1; i >= 0; i--) {
        newString += str[i];
    }

}

reverseString("sameer");
console.log(newString)