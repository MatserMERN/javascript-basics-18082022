/*
    * Splice - To Add / Remove the elements at the specific position
*/

// To add the elements
var fruits = ["Banana", "Orange", "Apple", "Mango"]

fruits.splice(2,0,"Lemon", "Kiwi")

console.log(fruits)

// To delete the elements

var fruitsOne = ["Banana", "Orange", "Apple", "Mango"]

fruitsOne.splice(2,2)

console.log(fruitsOne)

// To add and delete the elements

var fruitsTwo = ["Banana", "Orange", "Apple", "Mango"]

fruitsTwo.splice(2,2,"Lemon", "Kiwi")

console.log(fruitsTwo)

/*
    * Slice - To Add / Remove the elements at the specific position
*/

var fruitsThree = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var fruitsSlice = fruitsThree.slice(1,3)
console.log(fruitsSlice)

const fruitsFour = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const fruitsSliceOne = fruitsFour.slice(-3, -1)
console.log(fruitsSliceOne)