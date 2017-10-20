//使用“箭头”（=>）定义函数
var f = v=>v;
console.log(f(5));


//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
var getTempItem = id=>({id:id, name: 'Temp'});
console.log(getTempItem(5));


//如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。
let fn = ()=> void console.log('haha');
fn();

/*void 是一个操作符
他不改变任何值，仅用来保证表达式没有返回值（或者返回值为undefined）
 */
var a = 42;
console.log( void a, a ); // undefined 42

// rest 参数与箭头函数结合的例子
var numbers = (...nums)=>nums;
console.log(numbers(1, 2,3,4,5));

var headAndTail = (head, ...tail) => [head, tail];
console.log(headAndTail(1, 2,3,4,5));


// 箭头函数的定义生效是在foo函数生成时,如果是普通函数，执行时this应该指向全局对象window，这时应该输出21。但是，箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id: 42}），所以输出的是42。
function foo() {
    return ()=>{
        console.log(this.id, arguments);
    }
}
var id = 21;
foo.call({id: 42}, 1, 2)();


//下面是一个部署管道机制（pipeline）的例子，即前一个函数的输出是后一个函数的输入。
const pipeline = (...funcs) => val=>funcs.reduce((a, b)=> {

    return b(a);
}, val);
const plus = a=>a+1;
const mult2 = a=>a*2;

console.log( pipeline(plus, mult2)(5) );
console.log( mult2(plus(5)) );
