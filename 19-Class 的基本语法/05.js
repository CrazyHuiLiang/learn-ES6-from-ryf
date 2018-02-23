class MyClass {
    constructor () {

    }
    get prop() {
        return 'getter'
    }
    set prop(value) {
        console.log('setter:' + value)
    }
}

let inst = new MyClass()
console.log(inst.prop)
inst.prop = 5


