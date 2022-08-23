/*
    ? Spread (...) => Unpacks the elements of an array or object
    ? Rest   (...) => Packs the elements into an array
*/

// spread
const odd = [1,3,5]
const combined = [2,4,6, ...odd]
console.log(combined)

//rest - should the last parameter

function display(a,b, ...args){
    console.log(args)
}

display(1,2,3,4,5,6)

// Constructing array Literal

let initialChars = ['A', 'B']
let chars = [...initialChars, 'C', 'D']
console.log(chars)

// concatinating arrays
let numbers = [1,2]
let moreNumbers = [3,4]
let allNumbers = [...numbers, ...moreNumbers]
console.log(allNumbers)

// copying an array
let scores =[80, 70, 90]
let copiedScores = [...scores]
console.log(copiedScores)

// Spread opeartor with string

let charsOne = ['A', ...'BCDE', 'F']
console.log(charsOne)

// Objects 

var student = {
    id: 1,
    name: "Scott"
}

var studentOne = {
    ...student,
    city: "Boston"
}

console.log(studentOne)