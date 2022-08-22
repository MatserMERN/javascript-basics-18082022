function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName
}

function Student(age){
    this.age = age
}

// Inherit the properties from Parent Person
Student.prototype = new Person("Scott", "Desatnick")

Student.prototype.getAge = function(){
    return this.age
}

var student = new Student(46)
console.log(student.firstName)
console.log(student.lastName)
console.log(student.age)
console.log(student.getFullName())
console.log(student.getAge())