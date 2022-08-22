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
function getNumbers(){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve("Two") 
    }, 2000)
  })
}

console.log("One")
getNumbers().then(function(data){
  console.log(data)
  console.log("Three")
})


function getData() {
  return new Promise(function(resolve, reject){
      var count =10
       if(count > 5){
         setTimeout(function(){
           resolve({data: "Here is your data"})
         }, 3000)
       } else {
         reject({data: "No Data available"})
       }
  })
}

getData()
.then(function(data){
  console.log(data)
  var obj = data
  obj.status = "success"
  return obj
})
.then(function(data){
  console.log(data)
})
.catch(function(error){
  console.log(error)
})

// async await

function getNumbers(){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve("Two") 
    }, 2000)
  })
}

async function printNumbers() {
  console.log("One")
  var data = await getNumbers()
  console.log(data)
  console.log("Three")
}

printNumbers()

// Non Proimse value
async function getValue(){
  var data = await 10
  console.log(data)
}

getValue()


function getNumbers(){
  setTimeout(function(){
    console.log("Hello")
  }, 3000)
}

async function getNums(){
console.log("One")
var data = await getNumbers()
 console.log("Two")
}

getNums()