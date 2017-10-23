//使用蹦床函数取代递归，避免调用栈溢出


function sum1(x, y) {
    if (y > 0){
        return sum1(x+1, y-1);
    }
    else {
        return x;
    }
}
console.log(sum1(1, 10000));


//蹦床函数
function trampoline(f) {
    while (f && f instanceof Function){
        f = f();
    }
    return f;
}

function sum2(x, y) {
    if (y > 0){
        return sum2.bind(null, x+1, y-1);
    }
    else {
        return x;
    }
}

console.log(trampoline(sum2(1, 100000)));








