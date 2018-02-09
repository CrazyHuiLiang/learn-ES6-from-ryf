// 如果要把generator函数当作正常构造函数使用，可以采用下面变通方法。首先生成一个空对象，使用bind方法绑定generator函数内部的this。
function* F() {
    yield this.x = 2
    yield this.y = 3
}

var obj = {}
var f = F.bind(obj)()

console.log(obj)
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(obj)

