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

/*
    ? (parameter) => expression
    ?  parameter  => expression
*/

let people = ["Scott", "Adam", "Tuan", "Uma"]
let lengths = people.map(name => name.length)

console.log(lengths)

/*
    ? With no parameter
*/

let logDoc = () => console.log(window.document)
logDoc()


/*
    ? Line Break
*/

// let multiply = (x,y) 
// => x*y               This will give syntx error

let multiply = (x,y) =>
x*y

console.log(multiply(4,5))


/*
    ? Object Literal
*/

let setColor = (color) => ({value: color})
let backGroundColor = setColor("Green")

console.log(backGroundColor)