//Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。
// 也就是说，由于 Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。
console.log(Symbol());

//Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，
// 主要是为了在控制台显示，或者转为字符串时，比较容易区分。
console.log(Symbol('foo'));













