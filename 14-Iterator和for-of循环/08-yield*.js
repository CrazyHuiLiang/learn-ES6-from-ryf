let generator = function* () {
    yield 1
    yield* [2, 3, 4]
    yield 5
}

let iterator = generator()

for (let item of iterator) {
    console.log(item)
}
