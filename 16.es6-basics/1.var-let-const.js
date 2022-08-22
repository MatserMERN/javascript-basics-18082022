// function sample(){
//     var foo ="blue"
//     console.log(foo)
// }
// sample()
// console.log(foo) // ReferenceError: foo is not defined

// function display(){
//     if(true){
//         var foo = "Hello"
//         let bar = "How are you"
//         const baz ="I am fine"

//         console.log(foo)
//         console.log(bar)
//         console.log(baz)
//     }

//     console.log(foo)
//    // console.log(bar) // ReferenceError: bar is not defined
//    // console.log(baz) // ReferenceError: baz is not defined
// }

// display()

// var 
// for(var i=0; i<3; i++){
//     console.log(i)
// }
// console.log(i)

//let
// for(let i=0; i<3; i++){
//     console.log(i)
// }
// console.log(i) //  ReferenceError: i is not defined

// function sample(){
//     let foo =1
//         foo =10
//     //let foo =101

//     const bar = 100
//           //bar = 200 //  Assignment to constant variable.
// }

// sample()


const names = ["Scott", "Adam", "Tuan"]
names.push("Uma")
names[1] = "Johngalt"
console.log(names)