// var a = 10
// var b = a
//     a = 20
// console.log(a)
// console.log(b)

// // 20 20

// var a = [1,2]
// var b = a
// a.push(3)
// console.log(a)
// console.log(b)

// // [1,2,3]

// var a = [1,2]
// var b = a
// a = [1,2,3]

// console.log(a)
// console.log(b)

// // [1,2,3]

// console.log(multiply(2)(3)(4)) // 24

// function multiply(x){
//     return function(y){
//         return function(z){
//             return x * y * z
//         }
//     }
// }

// var name = 1 + 2 + "Scott" + 3 + 4

// console.log(name)

// //12Scott34
// //3Scott34
// //

// var output = (function(x){
//     delete x
//     return x
// })(1)

// console.log(output)

// []
// null
// undefined
// 1

// var output = (function(x){
//     delete x
//     return x
// })({a:1})

// console.log(output)

// var output = (function(x){
//     delete x.a
//     return x
// })({a:1})

// console.log(output)

// How to empty an array

var array = ['a', 'b', 'c', 'd', 'e', 'f']

// Method1
//array = []

// Method2
// while(array.length){
//     array.pop()
// }

// Method3 
//array.splice(0, array.length)

//Method4
// array.length = 0

//console.log(array)

// ternary 

// var a =11
// // if(a >10){
// //     console.log("a is bigger number")
// // } else {
// //     console.log("a is smaller number")
// // }

// var message = a > 10 ? "a is bigger number" :  "a is smaller number"
// console.log(message)

// == vs ===
// console.log(1==1)
// console.log(1=="1")
// console.log(1!="1")

// console.log(1===1)
// console.log(1==='1')
// console.log(1!=='1')


// console.log(checkIfEven(3)) // false
// console.log(checkIfEven(6)) // true
// console.log(checkIfEven(7)) // false

// function checkIfEven(a){
//     // if(a%2==0){
//     //     return true
//     // } 
//     // return false

//     // return a%2==0 ? true : false
//     return a%2==0 
// }

// function one(){
//     return {
//         value : 1
//     }
// }

// function two(){
//     return 
//     {
//         value: 2
//     }
// }

// console.log(one())
// console.log(two())


function myFunction() {
    "use strict";
  console.log(this); // will alert "undefined"
}
myFunction();