/*
    * De-Structuring
    ? breaking down a complex structure into simpler parts
*/

// Array destructring 
let array = ["Scott", "Adam", "Tuan"]

let [name1, name2, name3] = array

console.log(name1) // array[0]
console.log(name2) // array[1]
console.log(name3) // array[2]

// Split Method

let [fname, lname] = "Scott Desatnick".split(" ")
console.log(fname)
console.log(lname)

let [firstName, , lastName] = ["Scott", "Desatnick", "Great"]

console.log(firstName)
// console.log(title)
console.log(lastName)


// Object destructring

let user = {
    name: "Scott",
    age: 46,
    city: "Boston"
}

let {nameOne, age, city} = user

console.log(nameOne) // This would print undefined as 
console.log(age)    // there is no column called nameOne is user object
console.log(city)

let options = {
    title: "Menu",
    width: 100,
    height: 200
}

let {title, width, height} = options
console.log(title)
console.log(width)
console.log(height)