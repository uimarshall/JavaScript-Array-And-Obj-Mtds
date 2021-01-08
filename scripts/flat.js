const arr6 = [0, 1, 2, [3, 4]];

console.log(arr6.flat());
// expected output: [0, 1, 2, 3, 4]

const arr6 = [1, 2, 3, [4, 5]];

console.log(arr6.flat());
// expected output: [1, 2, 3, 4, 5]

let activities = [
    ['Work'],
    ['Without Play'],
    ['Makes'],
    ['Jack'],
    ['A Dull Boy']
];
console.log(activities.flat());
console.table(activities.flat());

// expected output: [ 'Work', 'Without Play', 'Makes', 'Jack', 'A Dull Boy' ]


const arr7 = [1, 2, 3, [[[4, 5]]]];

console.log(arr7.flat(2));
// expected output: [1, 2, 3, [4, 5]]