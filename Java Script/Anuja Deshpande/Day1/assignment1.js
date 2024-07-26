//1 Reverse a String

function reverseStr(str) {
  // method 1
  //     var arr = str.split('');

  //     var i = 0;
  //     var j = arr.length - 1;
  //     var temp;

  //     while(i<=j){
  //     temp = arr[i];
  //     arr[i] = arr[j];
  //     arr[j] = temp;
  //     i++, j--;
  // }

  //     return arr.join('');

  // method 2
  var reversed = "";

  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// console.log(reverseStr("okay"));

// 2 Largest Number

function largest(arr) {
  // var maxNum = Number.MIN_VALUE;

  // for(var i = 0; i<arr.length; i++){
  //     if (arr[i] > maxNum){
  //         maxNum = arr[i];
  //     }
  // }

  // return maxNum;

  var maximum = arr.reduce(largestFilter);

  function largestFilter(num1, num2) {
    // if(num1>num2){
    //     return num1;
    // }

    var mynum = num1 > num2 ? num1 : num2;
    return mynum;

    // return num2;
  }

  return maximum;
}

myarr = [2, 3333, 22222, 44];
// console.log(largest([1, 2, 3, -1, 400]));
// console.log(largest(myarr));

// 3 Palindrome check

function checkForPalindrome(str) {
  //can iterate over first and second halves respectively

  var i = 0,
    j = str.length - 1;

  while (i <= j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++, j--;
  }

  return true;
}

// console.log(checkForPalindrome("lool"));

// 4 Filter Array of Objects

function filterByAge(arr) {
  //method 1
  // var filtered_arr = [];

  // for(var i = 0; i<arr.length; i++){
  //     if(arr[i].age > 18){
  //         filtered_arr.push(arr[i]);
  //     }
  // }

  // return filtered_arr;

  //method 2
  var result = arr.filter(checkAge);

  function checkAge(obj) {
    return obj.age > 18;
  }

  return result;
}

var og_arr = [
  { name: "John", age: 18 },
  { name: "Agatha", age: 20 },
  { name: "Christie", age: 70 },
];
var filtered = filterByAge(og_arr);
// for (var i in filtered){
//     console.log(filtered[i].name);
// }
// console.log(filterByAge(og_arr));

// 5 Sum of all nums in array

function calculateArraySum(arr) {
  var mySum = 0;

  for(var i = 0; i<arr.length; i++){
      mySum += arr[i];
  }

//   function calcSum(total, num) {
//     return total += num;
//   }

//   mySum = arr.reduce(calcSum);



  return mySum;
}

console.log(calculateArraySum([20, 34, 10]));

// 6 Remove Duplicates from an Array

function makeUniq(arr) {
  var uniq = new Set(arr);
  return Array.from(uniq);
}

// console.log(makeUniq([2,2,3,3,3,5,5,1]));

// 7 Flatten a nested array

function flattenArr(arr) {
  var result = [];

  // for(var i = 0; i<arr.length; i++){
  //     if(Array.isArray(arr[i])){
  //         var flattenedSubarray = flattenArr(arr[i]);

  //         for(var j = 0; j<flattenedSubarray.length; j++){
  //             result.push(flattenedSubarray[j]);
  //         }
  //     }
  //     else{
  //         result.push(arr[i]);
  //     }
  // }

  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "object") {
      var flattenedSubarray = flattenArr(arr[i]);

      for (var j = 0; j < flattenedSubarray.length; j++) {
        result.push(flattenedSubarray[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

const arr2 = [0, 1, [2, [3, [4, 5]]]];

// console.log(flattenArr(arr2));

// ask bout this - console.log(arr2.flat());

// 8 Find intersection of two arrays

function findArrIntersection(arr1, arr2) {
  var intersection = arr1.filter(checkforVal);

  function checkforVal(val) {
    return arr2.includes(val);
  }

  return intersection;
}

// console.log(findArrIntersection([1,2,3,4], [3,4,5,6]));

// 9 Convert obj to array of key-val pairs. Check if need to bruteforce and verify iska implementation

function convertObjToArr(obj) {
  var arr = Object.entries(obj);

  return arr;
}

var obj = { name: "John", age: 30 };
// console.log(convertObjToArr(obj));

// 10 Sort an Array of Objects by a certain property

function sortObjectsByProp(arr) {
  arr.sort(function (a, b) {
    return b.age - a.age;
  });

  return arr;
}

// console.log(sortObjectsByProp(og_arr));

// for (var i in og_arr){
//     console.log(og_arr[i].name);
// }

// verify if this is what was expected

// console.log(typeof([1,2]));
// console.log(typeof(1));
