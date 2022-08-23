class Shape {
    constructor(){
        
    }
    draw(){
        return "I am generic shape"
    }
}

class Circle extends Shape {
    constructor(){
        super()
    }

    draw(){
        return "I am circle"
    }
}

let circle = new Circle()
console.log(circle.draw())