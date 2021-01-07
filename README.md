# JavaScript-Array-And-Obj-Mtds

Arrays are very useful in JavaScript. There are many important built-in properties and methods that will help you simplify your code and resolve tasks that involve an array.

Let’s get our hands dirty!
Some()

The some() method tests whether at least one element in the array passes the test implemented by the provided callback function. It returns a Boolean value. It returns true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.

Examples

const arr = [1, 2, 3, 7, 4]
 
let someArrMtd = arr.some(item => item < 6)
let someArrMtd1 = arr.some(item => item > 8)
console.log(someArrMtd) //Expected Output: true
console.log(someArrMtd1) //Expected  Output:  false
 
 
Use Case: checks whether an element is odd or even
 
const odd = (elem) => elem % 2 !== 0;
 
console.log(arr.some(odd)); // expected output: true


Syntax
arr.some(callback(element[, index[, array]])[, thisArg])
The callback function will receive 3 arguments, the element, the index, and the full array.
callback: A function to test for each element, taking three arguments:
element: The current element being processed in the array.
index(optional): The index of the current element being processed in the array.
array(Optional):  The array some() was called upon.
thisArg(Optional):  A value to use as this when executing callback.


function isGreaterThan20(element, index, array) {
 return element > 20;
}
 
console.log([2, 5, 8, 1, 14].some(isGreaterThan20));  //expected output: false
console.log([1, 5, 8, 1, 40].some(isGreaterThan20)); //expected output: true
 
every()
Unlike the some() method, The every() method tests whether all elements in the array pass the test implemented by the provided callback function. It returns a Boolean value. It returns true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
 
`const arr1 = [1, 2, 3, 5, 4]`
 
```let everyArrMtd = arr1.every(item => item < 6)
let everyArrMtd1 = arr1.every(item => item > 8)
console.log(everyArrMtd) //Expected Output: true
console.log(everyArrMtd1) //Expected  Output:  false```
 
Use Case: It can be used to set limits or constraints.
`const constraints = (value) => value <= 70`;
 
const array1 = [4, 50, 6, 49, 10, 63];
 
console.log(array1.every(constraints)); // expected output: true
 
## Syntax

arr.every(callback(element[, index[, array]])[, thisArg])

The callback function will receive 3 arguments, the element, the index, and the full array.
callback: A function to test for each element, taking three arguments:
element: The current element being processed in the array.
index(optional): The index of the current element being processed in the array.
function isGreaterThan20(element, index, array) {
 return element > 20;
}
console.log([2, 5, 8, 1, 14].every(isGreaterThan20));  //expected output: false
console.log([34, 25, 48, 31, 40].every(isGreaterThan20)); //expected output: true
