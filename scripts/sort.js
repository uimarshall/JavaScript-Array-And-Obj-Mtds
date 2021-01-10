let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.sort());
// Expected Output: [ 'Apple', 'Banana', 'Mango', 'Okra' ]

const numbers = [34, 100];
console.log(numbers.sort());

// Sort numbers in an array in ascending order:From the smallest to the biggest

let scores = [40, 100, 1, 5, 25, 10];
console.log(scores.sort((a, b) => a - b));
// Expected Output: [ 1, 5, 10, 25, 40, 100 ]

// Sort numbers in an array in descending order: From the biggest to the smallest

console.log(scores.sort((a, b) => b - a));
// Expected Output: [ 100, 40, 25, 10, 5, 1 ]
