
var f = v=>v;
console.log(f(5));

var getTempItem = id=>({id:id, name: 'Temp'});
console.log(getTempItem(5));

var numbers = (...nums)=>nums;
console.log(numbers(1, 2,3,4,5));

var headAndTail = (head, ...tail) => [head, tail];
console.log(headAndTail(1, 2,3,4,5));

function foo() {
    return ()=>{
        console.log(this.id, arguments);
    }
}
foo.call({id: 55}, 1, 2)();



const pipeline = (...funcs) => val=>funcs.reduce((a, b)=> {

    return b(a);
}, val);
const plus = a=>a+1;
const mult2 = a=>a*2;

console.log( pipeline(plus, mult2)(5) );
console.log( mult2(plus(5)) );

