ES7, Generator函数推导

function* bigGenerator() {
    for (let i = 0; i< 10000; i++) {
        yield i
    }
}

let squared = ( for (n of bigGenerator()) n * n)
console.log(squared.next())
