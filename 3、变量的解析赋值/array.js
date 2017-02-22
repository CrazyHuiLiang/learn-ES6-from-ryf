/**
 * Created by Zhang on 2017/2/22.
 */


//解构（Destructuring）。
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);

let [aa, [ab], ac] = [1, [2], 3];
console.log(aa, ab, ac);

let [ba, , bc] = [1, 2, 3];
console.log(ba, bc);

let [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail);

//解析不成功，变量的值等于undefined
let [bar, foo] = [1];
console.log(bar, foo);

//不完全解构，但是可以成功
let [x, y] = [1, 2, 3];
console.log(x, y);

//如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。
//let [i] = 1; //报错

//对于 Set 结构，也可以使用数组的解构赋值。
let [ax, ay, az] = new Set([1, 2, 3]);
console.log(ax, ay, az);

//事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(first, second, third, fourth, fifth, sixth);


//解构赋值允许指定默认值。
let [defaul=true] = [];
console.log(defaul);

let [ca, cb = '2'] = [1];
console.log(ca, cb);

//ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。null不严格等于undefined。
let [x1 = 1] = [null];
console.log(x1);

//如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
function f() {
    console.log('aaa');
}

let [x2 = f()] = [1];
console.log(x2);


