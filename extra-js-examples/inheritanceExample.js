class Animal {
    constructor(name) {
        this.name = name
    }
    talk() {
        console.log('zzzz.....')
    }
}
class Cat extends Animal {
    talk() {
        console.log("Meow Meow")
    }
}
class Dog extends Animal {
    talk() {
        super.talk()
        console.log("Woof Woof...")
    }
}

const max = new Dog('Max')
const tom = new Cat('Tom')
const jerry = new Animal("Jerry")
jerry.talk()
tom.talk()
max.talk()