class Foo {
    static classMethod() {
        return 'hello'
    }
}
console.log(Foo.classMethod())


// 静态方法可以被继承
class Bar extends Foo {}
console.log(Bar.classMethod())

class Bar2 extends Foo {
    static classMethod() {
        return super.classMethod() + ', too'
    }
}
console.log(Bar2.classMethod())


