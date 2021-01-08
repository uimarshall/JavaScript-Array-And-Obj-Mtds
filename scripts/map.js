let nums = [4, 9, 16, 25]
let squareRoots = nums.map((num) =>{
    console.log(Math.sqrt(num));
    return Math.sqrt(num)
})

// Expected outputs

// squareRoots is now     [2, 3, 4, 5]
// numbers is still [4, 9, 16, 25]

// Use case: It is used for transformations of arrays especially when consuming an API and formatting it using any markup language

const players = ["Bruno", "Mercy", "Kante"]

players.map((player) => {
  const div = document.createElement('div')
  div.textContent = player
  document.body.appendChild(div); 
 
});