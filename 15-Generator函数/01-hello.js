
function* helloGenerator() {
    console.log('begin')

    yield 'hello'
    console.log(1)

    yield 'world'
    console.log(2)

    return 'end'
}

let hw = helloGenerator()

console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())

