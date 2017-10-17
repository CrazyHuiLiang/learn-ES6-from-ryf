//JavaScript 定义对象的属性，有两种方法。

var obj = {};
// 方法一
obj.foo = true;

// 方法二
obj['a' + 'bc'] = 123;
console.log(obj);



//ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。
let propKey = 'foo';
obj = {
    [propKey]: true,
    ['a' + 'bc']: 123,

    //表达式还可以用于定义方法名。
    ['h' + 'ello'](){
        return 'hello';
    }
};
console.log(obj);


//注意，属性名表达式与简洁表示法，不能同时使用，会报错。
const foo = 'bar';
// const baz = { [foo] }; // 报错
const baz = { [foo]: 'abc'}; // 正确

