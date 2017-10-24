//除了定义自己使用的Symbol值以外，ES6还提供了11个内置的Symbol值，指向语言内部使用的方法。



// 对象的Symbol.hasInstance属性，指向一个内部方法。当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。比如，foo instanceof Foo在语言内部，实际调用的是Foo[Symbol.hasInstance](foo)。
class MyClass {
    [Symbol.hasInstance](foo) {
        return foo instanceof Array;
    }
}
console.log([1, 2, 3] instanceof new MyClass()); // true





// 对象的Symbol.isConcatSpreadable属性等于一个布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开。
//上面代码说明，数组的默认行为是可以展开，Symbol.isConcatSpreadable默认等于undefined。该属性等于true时，也有展开的效果。

let arr1 = ['c', 'd'];
console.log(
    ['a', 'b'].concat(arr1, 'e') ,// ['a', 'b', 'c', 'd', 'e']
    arr1[Symbol.isConcatSpreadable] // undefined
);


let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;

console.log(
    ['a', 'b'].concat(arr2, 'e') // ['a', 'b', ['c','d'], 'e']
);





