
class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('本类是虚类，不能实例化')
        }
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super()
    }
}
var x = new Shape()
var y = new Rectangle(3, 4)
console.log(x, y)







