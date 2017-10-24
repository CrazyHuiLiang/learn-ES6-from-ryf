// Array.from方法用于将两类对象转为真正的数组：
// 类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
console.log([].slice.call(arrayLike)); // ['a', 'b', 'c']

// ES6的写法
console.log(Array.from(arrayLike)); // ['a', 'b', 'c']


//只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组。
// Array.from方法还支持类似数组的对象。
// 所谓类似数组的对象，本质特征只有一点，即必须有length属性
// Array.from方法还支持类似数组的对象。
console.log(Array.from('hello'));
console.log(Array.from(new Set(['a', 'b'])));
console.log(Array.from({ length: 3 }));


// Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
console.log(Array.from(arrayLike, x => x + x));









