var todo = {
    "userId": 1,
    "id": 1,
    "title": "Some Title",
    "body": "Some Body"
}

var student = {
    id: 1,
    name: "Scott",
    email: "Scott@ef.com"
}

var studentStringify = JSON.stringify(student)
console.log(studentStringify, typeof studentStringify)

var studentParse = JSON.parse(studentStringify)
console.log(studentParse, typeof studentParse)