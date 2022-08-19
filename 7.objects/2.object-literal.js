var person = {} // Object Literal Syntax
// 1st way 
person["firstName"] = "Scott"
person["lastName"]= "Desatnick"

// 2nd way 
var cityName = "city"
person[cityName] = "Boston"

//3rd way - dot notation
person.email ="scott@ef.com"
person.address = {}
person.address.country = "USA"

// 4th way
Object.defineProperty(person, "age", {
    value: 46,
    writable: false
})

Object.defineProperty(person, "company", {
    value: Object.defineProperties({}, {
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


var student = {
    id: 1,
    name: "Scott",
    isAdmin: true,
    department: null,
    grade: undefined,
    getName: function(){
        return this.name
    },
    address: {
        city: "Boston",
        country: "USA"
    },
    subjects: ["Maths", "Physics", "Chemistry"]
}

student.age =46

console.log(student)
console.log(student.name)
console.log(student.isAdmin)
console.log(student.getName())
console.log(student.address.city)
console.log(student.subjects[2])