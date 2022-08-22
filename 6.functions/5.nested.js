function one(){
    return function two(){
        return function three(){
            return "Welcome to nested functions"
        }
    }
}

console.log(one()()())

function display(){
    var sayHello = function(){
        return "hello"
    }

    return sayHello
}

console.log(display()())

function testOne(){
    var one = function(){
        return "This is One"
    }

    // var message = one()
    // return message
    return one()
}

console.log(testOne())