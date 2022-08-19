/*
    * Dynamic Typing
*/
var a = 1
    a = "Scott"
    a = true
    a = undefined
    a = null
    a = function(){}
    a = {}
    a = [1,2,3]
console.log(a, typeof a)

console.log("Scott".length)
console.log("12".length)
console.log(Number.MAX_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
/*
 * static typing  ( .Net / java)
  int a =10
  a = true - throw a compilation error
*/   
function sample(){

}
sample.firstName ="hey"
console.log(sample.firstName)

var obj ={}
obj.name ="hello"
console.log(obj.name)
