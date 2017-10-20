
console.log(...[1,2,3]);
function push(array, ...items) {
    array.push(...items);
}

function add(x, y) {
    return x + y;
}

var numbers = [4, 38];

console.log(add(...numbers));

console.log(Math.max(...[1,2,3]));

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr3 = [6, 7, 8];
Array.prototype.push.apply(arr1, arr2);
console.log(arr1);

arr1.push(...arr3);
console.log(arr1);


console.log([...'hello'].length);

var go = function *() {
    yield 1;
    yield 2;
    yield 3;
};
console.log(...go());