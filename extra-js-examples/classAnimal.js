class Animal {
    constructor() {
        console.log('I am a ' + new.target.name)
    }
}

class Cat extends Animal {
    constructor() {
        super()
    }
}

const x = new Animal()

const y = new Cat()