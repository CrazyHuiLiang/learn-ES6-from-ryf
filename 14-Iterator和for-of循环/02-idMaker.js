
function idMaker(array) {
    var index = 0
    return {
        next: function () {
            return {value: index++}
        }
    }
}

// 创建指针对象it
var it = idMaker(['a', 'b'])

console.log(it.next())
console.log(it.next())
console.log(it.next())
