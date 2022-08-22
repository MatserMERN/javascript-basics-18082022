function greet(message){
    var city ="Boston"
    return function(name){
        return message + " " + name + " "  +city
    }
}

var sayHello = greet("Welcome")
console.log(sayHello)
 var wishMe = sayHello("Scott")

console.log(wishMe)