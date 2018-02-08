// for...of循环可以自动遍历Generator函数，且此时不再需要调用next方法
function* foo() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
    return 6
}

for (let v of foo()) {
    console.log(v)
}

// 一旦next方法的返回对象的done属性为true，for...of循环就会终止，且不包含该返回对象