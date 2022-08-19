var data = [
        1,
        "Scott",
        true,
        null,
        undefined,
        {
            name: "Scott"
        },
        function(name){
            return name
        },
        ["Red", "Green", "Blue"]
]

// access the function 
// pass the object name as parameter to function 
// print name "Scott"

console.log(data[5].name)
console.log(data[6])
console.log(data[6](data[5].name))

// access the function 
// pass the object name as parameter to function 
// access the array value blue
// print name "Scott Likes Blue"
console.log(data[7][2])
console.log(data[6](data[5].name))
console.log(data[6](data[5].name) + " Likes " + data[7][2] )