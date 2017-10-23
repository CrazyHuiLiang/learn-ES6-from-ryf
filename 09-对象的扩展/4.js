//ES6 提出“Same-value equality”（同值相等）算法，用来解决这个问题。Object.is就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。

console.log(
    Object.is('foo', 'foo'),
    Object.is(NaN, NaN),
);


// ES5 可以通过下面的代码，部署Object.is。
Object.defineProperty(Object, 'es5Is', {
    value: function (x, y) {
        if (x === y){
            return x !==0 || 1/x===1/y;
        }
        return x!==x && y!==y;
    },
    configurable: true,
    enumerable: false,
    writable: true
});

console.log(
    Object.es5Is('foo', 'foo'),
    Object.es5Is(NaN, NaN),
);