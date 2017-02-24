/**
 * Created by Zhang on 2017/2/22.
 */

//垫片库,支持at方法
require('String.prototype.at');

// JavaScript允许采用\uxxxx形式表示一个字符，其中“xxxx”表示字符的码点。
let a = "\u{20BB7}";
let hello = 123;

console.log(
    a,
    "\u{41}\u{42}\u{43}",
    hell\u{6F},
'\u{1F680}' === '\uD83D\uDE80'
);

var s = "𠮷";
console.log(
    s.length,
    s.charAt(0),
    s.charAt(1),
    s.charCodeAt(0),
    s.charCodeAt(1),
    s.codePointAt(0),
    s.codePointAt(1),
    s.codePointAt(0).toString(16)
);


for (let ch of s) {
    console.log(ch.codePointAt(0).toString(16));
}
console.log(String.fromCodePoint(0x20BB7));

for (let codePoint of 'abc') {
    console.log(codePoint);
}

//除了遍历字符串，这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。
var text = String.fromCodePoint(0x20BB7);
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}
for (let i of text) {
    console.log(i);
}

//字符串实例的at方法，可以识别Unicode编号大于0xFFFF的字符，返回正确的字符。
console.log(
    'abc'.at(0),
    '𠮷'.at(0)
);


var s2 = 'Hello world!';

console.log(
    s2.startsWith('Hello'),
    s2.endsWith('!'),
    s2.includes('o'),
    'x'.repeat(3)
);
// 普通字符串
console.log(`In JavaScript '\n' is a line-feed.`);

// 多行字符串
    console.log(`In JavaScript this is
 not legal.`);
//
console.log(`string text line 1
string text line 2`);
//
// // 字符串中嵌入变量
//模板字符串中嵌入变量，需要将变量名写在${}之中。
let name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

var greeting = `\`Yo\` World!`;
console.log(greeting);

console.log(`


<ul>
  <li>first</li>
  <li>second</li>
</ul>
`.trim());


//大括号内部可以放入任意的JavaScript表达式，可以进行运算，以及引用对象属性。

var x = 1;
var y = 2;

console.log(
    `${x} + ${y} = ${x + y}`,
    `${x} + ${y * 2} = ${x + y * 2}`
);


//模板字符串之中还能调用函数。
function fn() {
    return `Hello ${'World'}`;
}
console.log(`foo ${fn()} bar`);




//模板字符串甚至还能嵌套。
const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;
console.log(tmpl([{first:'first', last: 'last'}]));


// 如果需要引用模板字符串本身，在需要时执行，可以像下面这样写。

// 写法一
let str = 'return ' + '`Hello ${name}!`';
let func = new Function('name', str);
console.log(func('Jack')); // "Hello Jack!"

// 写法二
let str2 = '(name) => `Hello ${name}!`';
let func2 = eval.call(null, str2);
console.log(func2('Jack')); // "Hello Jack!"

// 模板字符串的功能，不仅仅是上面这些。它可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。这被称为“标签模板”功能（tagged template）。
//标签模板其实不是模板，而是函数调用的一种特殊形式。“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数。
console.log`haha`;

// 但是，如果模板字符里面有变量，就不是简单的调用了，而是会将模板字符串先处理成多个参数，再调用函数。
console.log`haha${x}abc`;
// 等同于
console.log([ 'haha', 'abc' ], 1);


var total = 30;
var msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
    var result = '';
    var i = 0;

    while (i < literals.length) {
        result += literals[i++];
        if (i < arguments.length) {
            result += arguments[i];
        }
    }

    return result;
}

console.log(msg); // "The total is 30 (31.5 with tax)"


//“标签模板”的一个重要应用，就是过滤HTML字符串，防止用户输入恶意内容。
var sender = '<script>alert("abc")</script>'; // 恶意代码
var message =
    SaferHTML`<p>${sender} has sent you a message.</p>`;
function SaferHTML(templateData) {
    var s = templateData[0];
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);

        // Escape special characters in the substitution.
        s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // Don't escape special characters in the template.
        s += templateData[i];
    }
    return s;
}
console.log(message);


var rawStr = tag`First line\nSecond line`;
function tag(strings) {
    console.log(strings.raw[0]);
    // "First line\\nSecond line"
}
rawStr;


//ES6还为原生的String对象，提供了一个raw方法。
//String.raw方法，往往用来充当模板字符串的处理函数，返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，对应于替换变量后的模板字符串。
console.log(`Hi\n${2+3}!`);
console.log(String.raw`Hi\n${2+3}!`);

//String.raw方法也可以作为正常的函数使用。这时，它的第一个参数，应该是一个具有raw属性的对象，且raw属性的值应该是一个数组。
console.log(String.raw({ raw: 'test' }, 0, 1, 2));
// 等同于
console.log(String.raw({ raw: ['t','e','s','t'] }, 0, 1, 2));












