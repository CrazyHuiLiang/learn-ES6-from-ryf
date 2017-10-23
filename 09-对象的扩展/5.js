let log = console.log;
let count = 1;
console.log = function(...arg){
    log(count++, ...arg);
};


//Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
const target = {a: 1};
const source1 = {b: 2};
const source2 = {c: 3};
Object.assign(target, source1, source2);
console.log(target);

console.log(Object.assign(2));

//其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。
// 但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。
// 这是因为只有字符串的包装对象，会产生可枚举属性。
const v1 = 'abc';
const v2 = true;
const v3 = 10;
console.log(Object.assign({}, v1, v2, v3));


//Object.assign拷贝的属性是有限制的，
// 只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）。
console.log(Object.assign({b: 'c'},
    Object.defineProperty({}, 'invisible', {
        enumerable: false,
        value: 'hello'
    })
));


//属性名为 Symbol 值的属性，也会被Object.assign拷贝。
console.log(Object.assign({ a: 'b' }, { [Symbol('c')]: 'd' }));

