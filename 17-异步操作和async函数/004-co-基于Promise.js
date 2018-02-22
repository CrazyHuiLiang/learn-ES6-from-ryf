var fs = require('fs')

var readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) reject(error)
            resolve(data)
        })
    })
}

var gen = function* () {
    var r1 = yield readFile('/etc/hosts')
    var r2 = yield readFile('/etc/shells')

    console.log(r1.toString())
    console.log(r2.toString())
}

// 手动执行
var g = gen()
g.next().value.then(function (data) {
    g.next(data).value.then(function (data) {
        g.next(data)
    })
})


function run(gen) {
    var g = gen();
    function next(data) {
        var result = g.next(data)
        if (result.done) return
        result.value.then(function (data) {
            next(data)
        })
    }
    next()
}
run(gen)