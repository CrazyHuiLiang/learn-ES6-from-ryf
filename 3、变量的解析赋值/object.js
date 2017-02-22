/**
 * Created by Zhang on 2017/2/22.
 */

let { foo, bar } = { foo: "aaa", bar: "bbb" };
console.log(foo, bar);


let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
console.log(f, l);

let { foo1: baz1 } = { foo1: "aaa", bar: "bbb" };
console.log(baz1); // "aaa"
// console.log(foo1); // error: foo is not defined
({ foo1: baz1 } = { foo1: "aaa", bar: "bbb" });


let obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};

let { p: [x, { y }] } = obj2;
console.log(x, y);

var node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};

var { loc: { start: { line }} } = node;
console.log(line);

var {x3 = 3} = {};
console.log(x3); // 3


var {x:y2 = 3} = {};
console.log(y2); // 3


var {x:y3 = 3} = {x: 5};
console.log(y3); // 5

//如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。
// let {foo: {bar2}} = {baz: 'baz'};
// console.log(bar2);


// 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。
let { log, sin, cos } = Math;
console.log(log, sin, cos);

//由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。
let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr;
console.log(first); // 1
console.log(last); // 3









