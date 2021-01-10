const findIdxOfArrayElem = [12, 120, 18, 130, 44, 2];

const isSmallNumber = (element) => element < 10;

console.log(findIdxOfArrayElem.findIndex(isSmallNumber));
// expected output: 5

const ages = [13, 10, 18, 20, 25];

const overAgePlayers = (age) => {
	return age >= 20;
};
console.log(ages.findIndex(overAgePlayers));
// expected output: 3
