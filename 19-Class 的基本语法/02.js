// 立即执行的clas
let person = new class {
    constructor(name) {
        this.name = name
    }

    sayName() {
        console.log(this.name)
    }
}('bill')

person.sayName()