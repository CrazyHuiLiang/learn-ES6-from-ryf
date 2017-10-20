// 非尾递归的 fibonacci 数列实现如下
function fibonacci(n) {
    if (n <= 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

//console.log(fibonacci(10)); // 89
//console.log(fibonacci(10000)); // Infinity


// 尾递归优化过的 Fibonacci 数列实现如下。
/*
n: 数列下标
ac1: 斐波那契数列规则是当前项为前两项的和，ac1寓意为前面第二项
ac2: 斐波那契数列规则是当前项为前两项的和，ac1寓意为前面第一项
*/
function fibonacci2(n, ac1=1, ac2=1) {
    if (n <= 1) return ac2;
    return fibonacci2(n-1, ac2, ac1+ac2);
}
console.log(fibonacci2(1000)); // 7.0330367711422765e+208

// “尾调用优化”对递归操作意义重大，
// 所以一些函数式编程语言将其写入了语言规格。
// ES6 是如此，第一次明确规定，所有 ECMAScript 的实现，都必须部署“尾调用优化”。
// 这就是说，ES6 中只要使用尾递归，就不会发生栈溢出，相对节省内存。