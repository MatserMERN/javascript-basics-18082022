var person1 = {firstName: "Scott", lastName: "Desatnick"}
var person2 = {firstName: "Adam", lastName: "Colson"}
var person3 = {firstName: "Tuan", lastName: "Bui"}

function display(message, city){
    // console.log(message)
    // console.log(city)
    return message + " to " + city + " Mr. " + this.firstName + " " + this.lastName
}

// var displayBind = display.bind(person1)
// console.log(displayBind("Welcome", "Boston"))

var displayBind = display.bind(person1, "Welcome", "Boston")
console.log(displayBind())

var displayCall = display.call(person2, "Welcome", "Newyork")
console.log(displayCall)

var displayApply = display.apply(person3,["Welcome", "Hanoi"] )
console.log(displayApply)

// var displayApply = display.apply(person3,[["Welcome", "Hanoi"], "Hello", "Mr.IronMan"] )
// console.log(displayApply)