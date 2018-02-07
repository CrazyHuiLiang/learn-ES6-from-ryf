// 对于类似数字的对象(存在数值键名和length属性），部署Iterator接口有一个简便方法，就是Symbol.iterator方法直接引用数组的Iterator接口
let obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
}

for (let item of obj) {
    console.log(item)
}



