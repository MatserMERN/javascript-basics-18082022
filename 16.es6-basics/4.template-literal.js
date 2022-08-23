let messageOne = "Welcome to template literal, \n" + 
"using ES5 \n" +
"sytanx"

console.log(messageOne)

let messageTwo = `Welcome to template literal, 
using ES6 
syntax`

console.log(messageTwo)

/*
    ? Variable and expression substituion
*/

let firstName = "Scott",
    lastName  = "Desatnick"

console.log("firstName: %s, lastName: %s", firstName, lastName)

console.log(`FirstName: ${firstName} LastName: ${lastName}`)