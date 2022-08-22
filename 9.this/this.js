console.log(this)

function sample(){
    console.log(this)
}

sample()

// var obj = {
//     name: "Scott",
//     getName: function(){
//         console.log(this)
//         this.name = "Desatnick"
//         console.log(this)

//         var updateName = function(){
//             this.name ="Great scott"
//             console.log(this)
//         }

//        updateName()
//     }
// }

// obj.getName()

// Fix this problem using a self variable

// var obj = {
//     name: "Scott",
//     getName: function(){
//         var self = this
//         console.log(self)
//         self.name = "Desatnick"
//         console.log(self)

//         var updateName = function(){
//             self.name ="Great scott"
//             console.log(self)
//         }

//        updateName()
//     }
// }

// obj.getName()


var obj = {
    name: "Scott",
    getName: function(){
        console.log(this)
        this.name = "Desatnick"
        console.log(this)

        var updateName = function(){
            this.name ="Great scott"
            console.log(this)
        }

         //   var final= updateName.bind(this)
        //    final()
       //    updateName.bind(this)()
       //    updateName.call(this)
       updateName.apply(this)
    }
}

obj.getName()