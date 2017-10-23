// 对象的解构赋值用于从一个对象取值，相当于将所有可遍历的、但尚未被读取的属性，分配到指定的对象上面。所有的键和它们的值，都会拷贝到新对象上面。
let {x, y, ...z} = {x:1, y:2, a:3, b: 4};
console.log(z);

//扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
let zClone = { ...z };
console.log(zClone);


// 与数组的扩展运算符一样，对象的扩展运算符后面可以跟表达式。
// x = 5;
const obj = {
    ...(x > 1 ? {a: 1} : {}),
    b: 2,
};
console.log(obj);

//如果扩展运算符的参数是null或undefined，这两个值会被忽略，不会报错。
let emptyObject = { ...null, ...undefined }; // 不报错
