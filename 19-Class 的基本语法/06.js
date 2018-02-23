class Foo {
    constructor(...args) {
        this.args = args
    }
    // 如果在某个方法前加上星号（*），就表示该方法是一个Generator函数
    *[Symbol.iterator]() {
        for (let arg of this.args) {
            yield arg
        }
    }
}

for (let x of new Foo('hello', 'world')) {
    console.log(x)
}