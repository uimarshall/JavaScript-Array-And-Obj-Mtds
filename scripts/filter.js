const ages = [5, 32, 33, 12, 40, 25, 18];
const adultAges = ages.filter(age => age >= 18);

console.log(adultAges);
// expected output: Array [ 32, 33, 40, 25, 18 ]

const isPassMark=(value)=>{
  return value >= 40
}

let filtered = [2, 50, 8, 70, 44].filter(isPassMark)
console.log(`only ${filtered.length} students passed with ${filtered} marks`);
//expected output:  //expected output:  only 3 students passed with 50,70,44 marks