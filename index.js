// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
function calculateSum(a, b) {
  return a + b;
}
console.log(calculateSum(1, 2));

// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
function isEven(a) {
  if (a % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(1));

// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.
function findMax(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findMax([1111, 222, 1, 4, 17, 111111]));

// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("ashiq"));

// 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
function filterOddNumbers(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
let newArr = filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]);
console.log(newArr);

// 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

// 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
function sortArray(arr) {
  let newArr = arr.sort((a, b) => a - b);
  return newArr;
}
console.log(sortArray([11, 21, 4, 2, 6, 4, 7]));

// 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter("aa"));
