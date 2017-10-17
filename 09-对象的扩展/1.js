//ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
const foo = 'bar';
const baz = {foo};  // 等同于 const baz = {foo: foo};
console.log(baz);

//例子2
function f(x, y) {
    return {x, y}; //等同于  return {x: x, y: y};
}
console.log(f(1, 1));



//除了属性简写，方法也可以简写。
const o = {
    method(){ //等价  method: function(){

        console.log('Hello !');
    }
};
o.method();






let ms = {};
function getItem (key) {
    return key in ms ? ms[key] : null;
}
function setItem (key, value) {
    ms[key] = value;
}

function clear () {
    ms = {};
}
//CommonJS 模块输出一组变量，就非常合适使用简洁写法。
module.exports = { getItem, setItem, clear };
// 等同于
module.exports = {
    getItem: getItem,
    setItem: setItem,
    clear: clear
};




//属性的赋值器（setter）和取值器（getter），事实上也是采用这种写法。
const cart = {
    _wheels: 4,

    get wheels () {
        return this._wheels;
    },

    set wheels (value) {
        if (value < this._wheels) {
            throw new Error('数值太小了！');
        }
        this._wheels = value;
    }
};
cart.wheels = 10;
console.log(cart.wheels);

// 如果某个方法的值是一个 Generator 函数，前面需要加上星号。
const obj = {
    * m() {
        yield 'hello world';
    }
};
console.log(obj);

