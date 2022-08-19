// function getValue(){
//     //return 1
//     //return "Scott"
//     //return true
//     //return null
//     //return undefined
//     //return function(){}
//     //return {}
//     //return []
//     //return
// }

// console.log(getValue())

// Polymorphism 
// function overloading - Is not possible in javascript
// function overriding 

function getName(firstName, lastName){
    console.log('Function1 is getting called')
    return firstName + " " + lastName
}

function getName(firstName){
    console.log('Function2 is getting called')
    return firstName
}

function getName(){
    console.log('Function3 is getting called')
    return "No parammeters"
}

console.log(getName("Scott", "Desatnick"))
console.log(getName("Adam", "Colson"))
console.log(getName("Tuan", "Bui"))

