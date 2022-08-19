function Student(firstName, lastName){
     this.firstName = firstName
     this.lastName = lastName
}

// new keyword creates an object
// without new it is just a function invocation
var studentObj = new Student("Scott", "Desatnick") 
console.log(studentObj)