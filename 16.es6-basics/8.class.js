// function Student(firstName,lastName){
//     this.firstName = firstName
//     this.lastName = lastName
// }

class Student {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName(){
        return this.firstName + " " + this.lastName
    }

    getMessage = () => {
        return "Welcome to ES6 classes"
    }

    getData(){
        return this.getMessage()
    }
}



var student = new Student("Scott", "Desatnick")
console.log(student)
console.log(student.getFullName())
console.log(student.getData())