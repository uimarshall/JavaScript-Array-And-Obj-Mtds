const arr4 = [2, 3, 4];

arr4.forEach(element => console.log(element**2)); //expected output: 4, 9, 16

const players = ["Bruno", "Mercy", "Kante"]

players.forEach((currentValue, index, array) => {
  console.log(`${currentValue} is at index ${index} in [${array}] array`);
});

// Expected output
// Bruno is at index 0 in [Bruno,Mercy,Kante] array
// Mercy is at index 1 in [Bruno,Mercy,Kante] array
// Kante is at index 2 in [Bruno,Mercy,Kante] array