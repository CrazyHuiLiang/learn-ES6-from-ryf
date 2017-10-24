//有时，我们希望重新使用同一个 Symbol 值，Symbol.for方法可以做到这一点。
// 它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。
// 如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');
console.log(s1 === s2); // true

// Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。
console.log(Symbol.keyFor(s1)); // "foo"


//变量s3属于未登记的 Symbol 值，所以返回undefined。
let s3 = Symbol("foo");
console.log(Symbol.keyFor(s3)); // undefined

















