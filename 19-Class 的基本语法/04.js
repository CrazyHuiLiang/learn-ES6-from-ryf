class ExtendableError extends Error {
    constructor (message) {
        super()
        this.message = message
        this.stack = (new Error()).stack
        this.name = this.constructor.name
    }
}

class MyError extends ExtendableError {
    constructor (m) {
        super(m)
    }
}

var myerror = new MyError('ll')
console.log(myerror.message)
console.log(myerror instanceof Error)
console.log(myerror.name)
console.log(myerror.stack)