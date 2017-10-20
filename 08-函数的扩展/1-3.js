
let foo = 'outer';

function bar(func = x=>foo) {
    let foo = 'inner';
    console.log(func());
}

bar();