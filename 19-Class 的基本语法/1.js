//ES6 前创建实例通过构造函数，如下

function Point1(x, y) {
    this.x = x;
    this.y = y;
}

Point1.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point1(1, 2);
console.log(p);




//ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。
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

//使用的时候，也是直接对类使用new命令，跟构造函数的用法完全一致。
var p2 = new Point(3 , 3);
console.log(
    p2,

    //ES6 的类，完全可以看作构造函数的另一种写法。
    // 构造函数的prototype属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的prototype属性上面
    Point === Point.prototype.constructor,

    //在类的实例上面调用方法，其实就是调用原型上的方法。
    p2.constructor === Point.prototype.constructor
);




