
var ticking = true
var clock = function () {
    if (ticking)
        console.log('Tick')
    else
        console.log('Tock')
    ticking = !ticking
}


var clock = function *(_) {
    while (true) {
        yield _
        console.log('Tick')
        yield _
        console.log('Tock')
    }
}


let c = clock()
c.next()
c.next()
c.next()
c.next()
c.next()



