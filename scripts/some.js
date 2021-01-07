// Some
const arr = [1, 2, 3, 7, 4]

let someArrMtd = arr.some(item => item < 6)
let someArrMtd1 = arr.some(item => item > 8)
console.log(someArrMtd) //Expected Output: true
console.log(someArrMtd1) //Expected  Output:  false


// Use Case: checks whether an element is odd or even
const odd = (elem) => elem % 2 !== 0;

console.log(arr.some(odd)); // expected output: true

// Syntax
// arr.some(callback(element[, index[, array]])[, thisArg])

function isGreaterThan20(element, index, array) {
  return element > 20;
}

console.log([2, 5, 8, 1, 14].some(isGreaterThan20));  //expected output: false
console.log([1, 5, 8, 1, 40].some(isGreaterThan20)); //expected output: true
