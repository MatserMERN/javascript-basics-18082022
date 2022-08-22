// let add = function(x,y){
//     return x + y
// }

/*
  * Both are equal
  ? (x,y) => {return x + y}
  ? (x,y) =>  x + y
*/

// let add = (x,y) =>{
//     return x + y
// }

// This will return undefined because it needs return statement
//let add = (x,y) => { x + y} 

// let add = (x,y) => x + y

//console.log(add(20,30))

// sort an array
let names = ["Scott", "Adam", "Tuan"]
names.sort()
console.log(names)

let numbers = [4,2,6]

numbers.sort((a,b) => b-a)

console.log(numbers)