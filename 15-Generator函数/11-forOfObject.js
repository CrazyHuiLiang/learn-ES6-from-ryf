function* objectEntries() {
    let propKeys = Object.keys(this)

    for (let propKey of propKeys) {
        yield [propKey, this[propKey]]
    }
}

let jane = {
    first: 'jane',
    last: 'Doe'
}

jane[Symbol.iterator] = objectEntries

for (let [key, value] of jane) {
    console.log(`${key}: ${value}`)
}



