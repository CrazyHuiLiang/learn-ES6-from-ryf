class Rectangle {
    constructor(length, width) {
        console.log(new.target === Rectangle)
        this.length = length
        this.width = width
    }
}
var obj = new Rectangle(3, 4)

class Square extends Rectangle {
    constructor(length) {
        super(length, length)
    }
}
var obj2 = new Square(2)

