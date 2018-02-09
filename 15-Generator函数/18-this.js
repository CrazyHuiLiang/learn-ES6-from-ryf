// generator函数返回的遍历器是generator函数的实例，它也继承了generator函数的prototype对象上的方法
function* g() {
    this.a = 11
}
g.prototype.hello = function () {
    return 'hi'
}

let obj = g()
console.log(obj instanceof g)
console.log(obj.hello())
// 如果把g当作普通的构造函数，则并不会生效，因为g返回的总是遍历器对象，而不是this对象
console.log(obj.a)


