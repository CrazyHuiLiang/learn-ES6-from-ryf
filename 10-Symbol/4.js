//Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
// 但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名。


const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

console.log(Object.getOwnPropertySymbols(obj));



//另一个新的API，Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。
let obj2 = {
    [Symbol('my_key')]: 1,
    enum: 2,
    nonEnum: 3
};

console.log(Reflect.ownKeys(obj2));