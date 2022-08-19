/*
    * Anonymous function / function expression
*/
// function getMessage(){
//     return "Welcome to the world of functions"
// }
// console.log(getMessage) - undefined

var getMessage =  function (){
    return "Welcome to the world of functions"
}

console.log(getMessage())

var getFullName = function(firstName, lastName){
    return firstName + " " + lastName
}

console.log(getFullName("Scott", "Desatnick"))

var display = function test(){
    return "this is display function"
}

console.log(display)
console.log(display())
