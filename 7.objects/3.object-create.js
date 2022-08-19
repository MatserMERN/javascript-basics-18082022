// var person = new Object()
//  var obj = {}
// var person = Object.create(obj)
// console.log(person)

var person = Object.create(null)
// 1st way 
person["firstName"] = "Scott"
person["lastName"]= "Desatnick"

// 2nd way 
var cityName = "city"
person[cityName] = "Boston"

//3rd way - dot notation
person.email ="scott@ef.com"
person.address = Object.create(null)
person.address.country = "USA"

// 4th way
Object.defineProperty(person, "age", {
    value: 46,
    writable: false
})

Object.defineProperty(person, "company", {
    value: Object.defineProperties(Object.create(null), {
        name: {
            value: "SpaceX"
        },
        website: {
            value: "https://spacex.com"
        }
    })
})

person.age=95

console.log(person)
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["cityName"])
console.log(person[cityName])
console.log(person["city"])
console.log(person.email)
console.log(person.firstName)
console.log(person["email"])
console.log(person["address"]["country"])
console.log(person.address.country)
