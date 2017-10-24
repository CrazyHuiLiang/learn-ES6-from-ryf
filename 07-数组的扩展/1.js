//扩展运算符

//扩展运算符（spread）是三个点（...）。
// 它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
console.log(...[1, 2, 3]);

//扩展运算符内部调用的是数据结构的 Iterator 接口，
// 因此只要具有 Iterator 接口的对象，都可以使用扩展运算符，比如 Map 结构。
let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);
console.log([...map.keys()]); // [1, 2, 3]


//Generator 函数运行后，返回一个遍历器对象，因此也可以使用扩展运算符。
const go = function*(){
    yield 1;
    yield 2;
    yield 3;
};
console.log([...go()]); // [1, 2, 3]








