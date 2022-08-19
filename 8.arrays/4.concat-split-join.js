/*
    ? concat - to join two arrays
*/
var fruits = ["Orange", "Apple", "Mango", "Banana"]
var vegetables = ["Potato", "Tomtato", "Egg Plant", "Drumstick"]

var mix = fruits + vegetables
console.log(mix, typeof mix )

var mixOne = fruits.concat(vegetables)
console.log(mixOne)

var mixTwo = vegetables.concat(fruits)
console.log(mixTwo)

/*
    ? split - to convert string into an array
*/

var names = "Scott Desatnick".split(" ")
console.log(names)

/*
    ? join - to convert an array into a string
*/

var movies = ["Avatar", "The Shawshank Redemption", "The Martian", "Interstellar"]
var movieString = movies.join(",")
console.log(movieString , typeof movieString)