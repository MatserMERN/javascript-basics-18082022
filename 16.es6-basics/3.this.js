// var employee = {
//     id:1,
//     greet: function(){
//         console.log(this.id)
//     }
// }

// employee.greet()

// use setTimeout

// var employee = {
//     id:1,
//     greet: function(){
//         setTimeout(function(){
//             console.log(this.id)
//         }, 2000)
//     }
// }

// employee.greet()

// Fix using self variable
// var employee = {
//     id:1,
//     greet: function(){
//         var self = this
//         setTimeout(function(){
//             console.log(self.id)
//         }, 2000)
//     }
// }

// employee.greet()

// Fix using self variable
// var employee = {
//     id:1,
//     greet: function(){
//         setTimeout(function(){
//             console.log(this.id)
//         }.bind(this), 2000)
//     }
// }

// employee.greet()

// With fat arrow function
// var employee = {
//     id:1,
//     greet: function(){
//         setTimeout(() =>{
//             console.log(this.id)
//         }, 2000)
//     }
// }

// employee.greet()

// var employee = {
//     id:1,
//     greet: function(){
//         setTimeout(() =>{
//             var data = () =>{
//                 console.log(this.id)
//             }
//             data()
//         }, 2000)
//     }
// }

// employee.greet()

var employee = {
    id:1,
    greet: function(){
        var getmessage = function(){
            setTimeout(() =>{
                console.log(this.id)
            }, 2000)
        }

        getmessage()
    }
}

employee.greet()