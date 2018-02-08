function* f() {
    for (var i=0; true; i++) {
        var reset = yield i
        if (reset) {
            i=-1
        }
    }
}

var g=f()
console.log(g.next())
console.log(g.next())
console.log(g.next())
// next 方法可以带一个参数，该参数会被当作上一条yield语句的返回值
console.log(g.next(true))