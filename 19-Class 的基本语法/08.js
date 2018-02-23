function Person(name) {
    if (new.target === Person) {
        this.name = name
    } else {
        throw new Error('必须使用new生成实例')
    }
}
var persion = new Person('bill')
var netAPerson = Person.call(Person, '张三')