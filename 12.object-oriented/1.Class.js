// Class 
function Student(){

}

// Instance
function Person(){

}

var person1 = new Person() // person1 is an instance

// Constructor
function Order(){
    console.log("Order Initiated")
}

var order = new Order() // Order() is called constructor

// Properties
function Customer(gender){
    this.gender = gender
}

var customer1 = new Customer("Female")
console.log(customer1)