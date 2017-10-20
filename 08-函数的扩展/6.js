//此文件需要
// $babel-node  6.js


// 函数绑定运算符是并排的两个冒号（::），双冒号左边是一个对象，右边是一个函数。
// 该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面。

//foo::bar;
// 等同于
//bar.bind(foo);

// foo::bar(...arguments);
// // 等同于
// bar.apply(foo, arguments);

function hasOwn(obj, key) {
    return obj::Object.prototype.hasOwnProperty(key);
}

console.log(
    hasOwn(Object.prototype, 'hasOwnProperty'),
    Object.prototype.hasOwnProperty('hasOwnProperty')
);


// 如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面。
let log = ::console.log;
// 等同于
log('let log = console.log.bind(console);');


//由于双冒号运算符返回的还是原对象，因此可以采用链式写法。
function push(e) {
    this.push(e);
    return this;
}

let a = [11, 22];
a::push(33)::push(44);
var aPush = a::push;
log(aPush(55), a);


