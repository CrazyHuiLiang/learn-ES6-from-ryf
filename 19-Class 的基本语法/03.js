
class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    // 注意，定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。
    toString(){
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class ColorPoint extends Point {
    constructor (x, y, color) {
        super(x, y) //调用父类的constructor，子类必须在constructor中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承了父类的this对象，然后对其进行加工
        this.color = color
    }

    toString(){
        return this.color + super.toString()
    }
}

let cp = new ColorPoint(1, 2, 'red')
console.log(cp.toString())





