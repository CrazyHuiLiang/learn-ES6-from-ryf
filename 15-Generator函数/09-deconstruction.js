
function* numbers() {
    yield 1
    yield 2
    yield 3
    return 4
    yield 5
}

console.log([...numbers()])
console.log(Array.from(numbers()))
let [x, y] = numbers()
console.log(x, y)

