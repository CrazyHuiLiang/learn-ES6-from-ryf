/**
 * Created by Zhang on 2017/2/22.
 */

let {toString: s} = 123;
console.log(s === Number.prototype.toString);// true

let {toString: n} = 123;
console.log(n === Number.prototype.toString);// true


//解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

