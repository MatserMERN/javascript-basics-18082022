// var person = {
//     firstName: "Scott",
//     lastName: "Desatnick",
//     city: "Boston",
//     age: 46
// }

// /*
//     * CRUD
//     ? C- CREATE
//     ? R- READ
//     ? U- UPDATE
//     ? D- DELETE
// */

// person.email="scott@ef.com" // CREATE
// person.firstName = "Great Scott" // UPDATE
// delete person.age // DELETE
// console.log(person) // READ

// /*
//    * Object.preventExtensions()
//    ? we can update the existing properties 
//    ? we can delete the existing properties 
//    ? we can't create new properties 
// */

// var studentPreventExtensions = {
//     firstName: "Scott",
//     lastName: "Desatnick",
//     city: "Boston",
//     age: 46
// }

// Object.preventExtensions(studentPreventExtensions)

// studentPreventExtensions.email="scott@ef.com" // CREATE
// studentPreventExtensions.firstName = "Great Scott" // UPDATE
// delete studentPreventExtensions.age // DELETE
// console.log(studentPreventExtensions) // READ


// /*
//    * Object.Seal()
//    ? we can update the existing properties 
//    ? we can't delete the existing properties 
//    ? we can't create new properties 
// */

// var studentSeal = {
//     firstName: "Scott",
//     lastName: "Desatnick",
//     city: "Boston",
//     age: 46
// }

// Object.seal(studentSeal)

// studentSeal.email="scott@ef.com" // CREATE
// studentSeal.firstName = "Great Scott" // UPDATE
// delete studentSeal.age // DELETE
// console.log(studentSeal) // READ

/*
   * Object.Freeze()
   ? we can't update the existing properties 
   ? we can't delete the existing properties 
   ? we can't create new properties 
*/

// var studentFreeze = {
//     firstName: "Scott",
//     lastName: "Desatnick",
//     city: "Boston",
//     age: 46,
//     address: { 
//         country: "USA"
//     }
// }

// Object.freeze(studentFreeze)
// Object.freeze(studentFreeze.address)

// studentFreeze.email="scott@ef.com" // CREATE
// studentFreeze.firstName = "Great Scott" // UPDATE
// delete studentFreeze.age // DELETE
// studentFreeze.address.country ="India"
// console.log(studentFreeze) // READ


// var studentStringify = JSON.stringify(studentFreeze)
// var studentParse = JSON.parse(studentStringify)

// studentParse.firstName = "Great Scott"
// console.log(studentParse)
// studentFreeze = studentParse

// console.log(studentFreeze)

var a = 10
var b = a
    a = 20
console.log(a)
console.log(b)

// 20 20

var a = [1,2]
var b = a
a.push(3)
console.log(a)
console.log(b)

// [1,2,3]

var a = [1,2]
var b = a
a = [1,2,3]

console.log(a)
console.log(b)

// [1,2,3]