// __proto__属性（前后各两个下划线），用来读取或设置当前对象的prototype对象。

//es6的写法
const someOtherObj = {a:5};
let obj = {
    method(){}
};
obj.__proto__ = someOtherObj;


//es5的写法
obj = Object.create(someOtherObj);
obj.method = function () {};
console.log(obj.a);



// Object.setPrototypeOf方法的作用与__proto__相同，用来设置一个对象的prototype对象，返回参数对象本身。
// 它是 ES6 正式推荐的设置原型对象的方法。
let proto = {};
obj = { x: 10 };
Object.setPrototypeOf(obj, proto);
proto.y = 20;
proto.z = 40;
console.log(obj, obj.__proto__);


// Object.getPrototypeOf()与Object.setPrototypeOf方法配套，用于读取一个对象的原型对象
function Rectangle() {
    // ...
}
const rec = new Rectangle();
console.log(Object.getPrototypeOf(rec) === Rectangle.prototype);
