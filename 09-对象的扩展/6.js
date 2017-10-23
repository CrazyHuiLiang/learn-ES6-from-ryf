
//Reflect.ownKeys返回一个数组，包含对象自身的所有键名，
// 不管键名是 Symbol 或字符串，也不管是否可枚举。

console.log(
    Reflect.ownKeys({
        [Symbol()]:0,
        b:0,
        10:0,
        2:0,
        a: 0
    }),
);

