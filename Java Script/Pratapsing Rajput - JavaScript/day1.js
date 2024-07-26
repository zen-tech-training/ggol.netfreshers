//********************* 1: Reverse a String Problem *********************//

function reverseString(str) {
  const result = str.split("").reverse().join("");
  console.log(result);
  return result;
}

function reverseStringOptimized(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(reversed);
  return reversed;
}

// Example
reverseString("pratap");
reverseStringOptimized("rajput");

//********************* 2: Find the Largest Number in an Array *********************//

function findLargestNumber(arr) {
  const result = Math.max(...arr);

  console.log(result);

  return result;
}

function findLargestNumberOptimized(arr) {
  let largest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
  }

  console.log(largest);

  return largest;
}

// Example
findLargestNumber([1, 5, 3, 9, 2]);
findLargestNumberOptimized([1, 5, 3, 9, 2]);

//********************* 3: Check if a String is a Palindrome *********************//

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  const result = str === reversed;
  console.log(result);
  return result;
}

function isPalindromeOptimized(str) {
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      console.log(false);

      return false;
    }
  }
  console.log(true);
  return true;
}

// Example
isPalindrome("racecar");
isPalindromeOptimized("racer");

//********************* 4: Filter Array of Objects *********************//

function filterAdults(people) {
  const result = people.filter((person) => person.age > 18);
  console.log(result);
  return result;
}

function filterAdultsOptimized(people) {
  let adults = [];

  for (let person of people) {
    if (person.age > 18) {
      adults.push(person);
    }
  }

  console.log(adults);

  return adults;
}

// Example
const people = [
  { name: "Pratap", age: 22 },
  { name: "Ishani", age: 16 },
];

filterAdults(people);
filterAdultsOptimized(people);

//********************* 5: Sum of All Numbers in an Array *********************//

function sumArray(arr) {
  const result = arr.reduce((sum, num) => sum + num, 0);
  console.log(result);
  return result;
}

function sumArrayOptimized(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  console.log(sum);
  return sum;
}

// Example
sumArray([1, 2, 3, 4]);
sumArrayOptimized([1, 2, 3, 4]);

//********************* 6: Remove Duplicates from an Array *********************//

function removeDuplicates(arr) {
  const result = [...new Set(arr)];
  console.log(result);
  return result;
}

function removeDuplicatesOptimized(arr) {
  let unique = [];
  let seen = {};

  for (let num of arr) {
    if (!seen[num]) {
      unique.push(num);

      seen[num] = true;
    }
  }

  console.log(unique);
  return unique;
}

// Example
removeDuplicates([1, 2, 2, 3, 4, 4]);
removeDuplicatesOptimized([1, 2, 2, 3, 4, 4]);

//********************* 7: Flatten a Nested Array *********************//

function flattenArray(arr) {
  const result = arr.flat(Infinity);
  console.log(result);
  return result;
}

function flattenArrayOptimized(arr) {
  let result = [];

  function flatten(subArr) {
    for (let item of subArr) {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        result.push(item);
      }
    }
  }
  flatten(arr);
  console.log(result);
  return result;
}

// Example
var nestedArray = [1, [2, 3], [4, [5, 6]]];
flattenArray(nestedArray);
flattenArrayOptimized(nestedArray);

//********************* 8: Find Intersection of Two Arrays *********************//

function findIntersection(arr1, arr2) {
  const result = arr1.filter((value) => arr2.includes(value));
  console.log(result);
  return result;
}

function findIntersectionOptimized(arr1, arr2) {
  let set1 = new Set(arr1);
  let result = [];
  for (let value of arr2) {
    if (set1.has(value)) {
      result.push(value);
    }
  }
  console.log(result);
  return result;
}

// Example
var array1 = [1, 2, 3, 4];
var array2 = [3, 4, 5, 6];
findIntersection(array1, array2);
findIntersectionOptimized(array1, array2);

//********************* 9: Convert an Object to an Array of Key-Value Pairs *********************//

function objectToArray(obj) {
  const result = Object.entries(obj);
  console.log(result);
  return result;
}

function objectToArrayOptimized(obj) {
  let result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([key, obj[key]]);
    }
  }
  console.log(result);
  return result;
}

// Example
var obj = { name: "John", age: 30 };
objectToArray(obj);
objectToArrayOptimized(obj);

//********************* 10: Sort an Array of Objects by a Property *********************//

function sortByProperty(arr, property) {
  const result = arr.sort((a, b) => a[property] - b[property]);
  console.log(result);
  return result;
}

function sortByPropertyOptimized(arr, property) {
  const result = arr.slice().sort((a, b) => a[property] - b[property]);
  console.log(result);
  return result;
}

// Example
const peopleArray = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Alice", age: 35 },
];
sortByProperty(peopleArray, "age");
sortByPropertyOptimized(peopleArray, "age");
