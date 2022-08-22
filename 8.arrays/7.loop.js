var students = ["Scott", "Adam", "Tuan"]

// Imperative code
console.log("*********Using For Loop*********")
// for loop
for(var i=0; i< students.length;i++){
    console.log(i, students[i])
}

// Declarative

console.log("*********Using ForEach*********")
// forEach
students.forEach(function(value, index){
    console.log(index, value)
})

console.log("*********Using Map*********")
// map
students.map(function(value, index){
    console.log(index, value)
})

console.log("*********Using ForEach va Map*********")

var studentsForEach = students.forEach(function(value, index){
    return value + '-' + index
})

var studentsMap = students.map(function(value, index){
    return value + '-' + index
})

console.log(studentsForEach)
console.log(studentsMap)

console.log("*********Using For in*********")

for(var value in students) {
    console.log(value)
}

console.log("*********Using For of*********")

for(var value of students) {
    console.log(value)
}

for(var [index, value] of Object.entries(students)){
    console.log(index, value)
}