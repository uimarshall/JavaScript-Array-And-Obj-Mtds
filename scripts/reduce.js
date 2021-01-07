const arr3 = [10, 20, 30, 40];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 10 + 20 + 30 + 40
console.log(arr3.reduce(reducer)); // expected output: 100

// 20 + 10 + 20 + 30 + 40
console.log(arr3.reduce(reducer, 20)); // expected output: 120

// Use Case: It can use for summation of elements in an array
const nums = [10, 20, 30, 40, 100];
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // expected output: 200
