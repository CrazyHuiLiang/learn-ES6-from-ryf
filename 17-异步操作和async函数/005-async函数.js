var fs = require('fs')

var readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) reject(error)
            resolve(data)
        })
    })
}

var asyncReadFile = async function () {
    var r1 = await readFile('/etc/hosts')
    var r2 = await readFile('/etc/shells')

    console.log(r1.toString())
    console.log(r2.toString())
}

asyncReadFile()


