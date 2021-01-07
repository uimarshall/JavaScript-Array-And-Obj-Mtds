const arr1 = [1, 2, 3, 5, 4]

let everyArrMtd = arr1.every(item => item < 6)
let everyArrMtd1 = arr1.every(item => item > 8)
console.log(everyArrMtd) //Expected Output: true
console.log(everyArrMtd1) //Expected  Output:  false


// Use Case: It can be used to set limits or constraints.
const constraints = (value) => value <= 70;

const array1 = [4, 50, 6, 49, 10, 63];

console.log(array1.every(constraints)); // expected output: true

 

// Syntax
// arr.every(callback(element[, index[, array]])[, thisArg])

function isGreaterThan20(element, index, array) {
  return element > 20;
}

console.log([2, 5, 8, 1, 14].every(isGreaterThan20));  //expected output: false
console.log([34, 25, 48, 31, 40].every(isGreaterThan20)); //expected output: true