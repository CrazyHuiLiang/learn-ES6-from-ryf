//由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，
// 用于对象的属性名，就能保证不会出现同名的属性。
// 这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。


//Symbol 类型还可以用于定义一组常量，保证这组常量的值都是不相等的。

var log={};
log.levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn')
};













