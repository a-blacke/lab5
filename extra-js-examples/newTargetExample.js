function Add(a, b) {
    if (!new.target) {
        return a+b;
    }
    this.first = a
    this.second = b
    this.calculate = () => {
        return this.first + this.second
    }
}

console.log(Add(3, 5))

const add = new Add(3, 5)
console.log(add.calculate())




