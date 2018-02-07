let myIterable = {}

myIterable[Symbol.iterator] = function* () {
    yield 1
    yield 2
    yield 3
}
console.log([...myIterable])




// 简洁写法
let obj = {
    * [Symbol.iterator] () {
        yield 'hello'
        yield 'world'
    }
}
for (let item of obj) {
    console.log(item)
}


