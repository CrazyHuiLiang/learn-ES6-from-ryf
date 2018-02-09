// 如果被代理的Generator函数有return语句，那么可以向代理它的Generator函数返回数据
function* foo() {
    yield 'a'
    yield 'b'
    return 'foo'
}

function* bar() {
    yield 'x'
    var v = yield* foo()
    console.log('v:', v)
    yield 'y'
}


let g = bar()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
