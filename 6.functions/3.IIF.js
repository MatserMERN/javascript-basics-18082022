/*
    ? IIF - Immediately Invoked Function
*/

(function(){
    console.log("This is IIF")
})();

(function(){
    console.log("This is IIF")
}());

(function(message){
    console.log(message)
})("Welcome to IIFs");

var total = (function(a,b){
                return a+b
            })(10,20);
console.log(total)

console.log((function(){return "Hey, Hola !!!"})())

// Avoid polluting global object
var message = (function confirm(){
    return "This is confirm method"
})()
console.log(message)

// Creating privacy

var getDetails = (function(){
        var name ="Scott"
        var getName = function(){ return name}
        //return getName()
})()

console.log(getDetails)