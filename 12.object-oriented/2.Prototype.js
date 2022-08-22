// function Student(){
//     this.name ="Scott"
//     this.gender ="Male"
// }

// Student.prototype.age = 46

// var student1 = new Student()
// console.log(student1)

// var student2 = new Student()
// console.log(student2)

function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    // this.getFullName = function(){
    //     return this.firstName + " " + this.lastName
    // }
}

Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName
}

var person1 = new Person("Scott", "Desatnick")
console.log(person1)
console.log(person1.getFullName())

var person2 = new Person("Adam", "Colson")
console.log(person2)
console.log(person2.getFullName())

var person3 = new Person("Tuan", "Bui")
console.log(person3)
console.log(person3.getFullName())