//蹦床函数并不是真正的尾递归优化，下面的实现才是。
function tco(f) {
    var value;
    var active = false;
    var accumulated = [];

    return function accumulator() {
        accumulated.push(arguments);
        if (!active){
            active = true;
            while (accumulated.length){
                value = f.apply(this, accumulated.shift())
            }
            active = false;
            return value;
        }
    }
}

var sum = tco(function (x, y) {
    if (y>0){
        return sum(x+1, y-1);
    }
    else {
        return x;
    }
});

console.log(sum(1, 1000000));