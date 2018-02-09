// yield* 是for...of的一种简写形式
function* foo() {
    yield 'a'
    yield 'b'
}

function* bar() {
    yield 'x'
    yield* foo()
    yield 'y'
}

for (let v of bar()) {
    console.log(v)
}

let g = bar()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
