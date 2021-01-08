const firstEvenNum = [5, 4, 8,110, 3];

const evenNum = firstEvenNum.find(num  => num % 2 === 0);

console.log(evenNum);
// expected output: 4

const nations = [
  {name: 'nigeria', continent: 'Africa'},
  {name: 'Portugal', continent: 'Europe'},
  {name: 'England', continent: 'Europe'}
];

const isEurope=(nation) =>{
  return nation.name === 'Portugal';
}

console.log(nations.find(isEurope));
// { name: 'cherries', quantity: 5 }