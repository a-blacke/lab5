Number.prototype.isOdd = function () {
    return this % 2 === 1;
}

const num1 = 3, num2 = 4;

console.log(num1.isOdd(), num2.isOdd())