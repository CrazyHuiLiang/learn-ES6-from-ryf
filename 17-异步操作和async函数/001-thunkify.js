var thunkify = require('thunkify')
var fs = require('fs')

var read = thunkify(fs.readFile)
read('../package.json')(function (err, str) {
    var str = String(str)
    var json = JSON.parse(str)

    if (err) {
        console.log(err)
    } else {
        console.log(json)
    }
})



