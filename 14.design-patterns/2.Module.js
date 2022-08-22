// var Module = (function(){

// })()

// Private Methods

// var Module = (function(){
//     var privateMethod = function(){
//     }

//     var publicMethod = function(){
//     }
// })()

// console.log(Module)

// Understanding 'return'

// var Module = (function(){
//     var privateMethod = function(){
//     }

//     var publicMethod = function(){
//     }

//     return {
//         publicMethod : publicMethod
//     }
// })()

// console.log(Module)

// Anonymous Object Literal return 
// var Module = (function(){
//     var privateMethod = function(){

//     }

//     return {
//         publicMethodOne: function(){

//         },
//         publicMethodTwo: function(){

//         },
//         publicMethodThree: function(){

//         }
//     }


// })()

// console.log(Module)

// Locally Scoped Object Literal
// var Module = (function(){
//     var privateMethod = function(){

//     }

//     var myObj = {}
//     myObj.someMethod = function(){

//     }
//     return myObj

// })()

// console.log(Module)

// Stacked Locally Scoped Object Literal
// var Module = (function(){
//     var privateMethod = function(){

//     }

//     var myObj = {
//         someMethod : function(){

//         },
//         anotherMethod : function(){

//         }
//     }
//     return myObj
// })()

// console.log(Module)

// Revaling Module Pattern 
// var Module = (function(){

//     var privateMethod = function(){

//     }

//     var someMethod = function(){

//     }

//     var anotherMethod = function(){

//     }

//     return {
//         someMethod: someMethod,
//         anotherMethod: anotherMethod
//     }
// })()

// console.log(Module)

// Accessing the private method

var Module = (function(){

    var privateMethod = function(message){
        console.log(message)
    }

    var publicMethod = function(text){
        privateMethod(text)
    }

    return {
        publicMethod: publicMethod
    }
})()

Module.publicMethod("Calling private method")

