// 如果generator函数内部有try...finally代码块，那么return方法会推迟finally代码块执行完再执行
function* numbers () {
    yield 1
    try {
        yield 2
        yield 3
    } finally {
        yield 4
        yield 5
    }
}

var g = numbers()
console.log(g.next())
console.log(g.next())

console.log(g.return(7))

console.log(g.next())
console.log(g.next())
