class RangeIterator {
    constructor (start, stop) {
        this.value = start
        this.stop = stop
    }

    [Symbol.iterator]() {
        return this
    }

    next () {
        var value = this.value
        if (value < this.stop) {
            return {
                done: false,
                value: ++this.value
            }
        } else {
            return {
                done: true,
                value: undefined
            }
        }
    }
}

function range(start, stop) {
    return new RangeIterator(start, stop)
}

for (var value of range(0, 3)) {
    console.log(value)
}