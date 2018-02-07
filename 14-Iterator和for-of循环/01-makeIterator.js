// 模仿next 方法返回值
function makeIterator(array) {
    var nextIndex = 0
    return {
        next: function () {
            return nextIndex < array.length? {value: array[nextIndex++]}: {done:true}
        }
    }
}

// 创建指针对象it
var it = makeIterator(['a', 'b'])

console.log(it.next())
console.log(it.next())
console.log(it.next())
