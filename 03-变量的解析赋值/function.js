/**
 * Created by Zhang on 2017/2/22.
 */

// 函数的参数也可以使用解构赋值。
function add([x, y]){
    return x + y;
}

console.log(add([1, 2])); // 3


[[1, 2], [3, 4]].map(([a, b]) => console.log(a + b));

function move({x = 0, y = 0} = {}) {
    return [x, y];
}

console.log(move({x: 3, y: 8})); // [3, 8]
console.log(move({x: 3})); // [3, 0]
console.log(move({})); // [0, 0]
console.log(move()); // [0, 0]

console.log('函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果');
function move({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}

console.log(move({x: 3, y: 8})); // [3, 8]
console.log(move({x: 3})); // [3, 0]
console.log(move({})); // [0, 0]
console.log(move()); // [0, 0]

