
//ES2017 引入了Object.getOwnPropertyDescriptors方法，
// 返回指定对象所有自身属性（非继承属性）的描述对象。
console.log(
    Object.getOwnPropertyDescriptors({
        foo: 123,
        get bar() { return 'abc' }
    })
);







