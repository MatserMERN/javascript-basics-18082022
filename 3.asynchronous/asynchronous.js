/*
    ? Synchrnous code
*/
console.log("One")
console.log("Two")
console.log("Three")

/*
    ? Asynchrnous code
*/
console.log("One")
setTimeout(function(){
  console.log("Two")  
}, 2000)
console.log("Three")

//Promises 
// async await