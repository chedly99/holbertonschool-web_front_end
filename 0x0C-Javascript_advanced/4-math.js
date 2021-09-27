function divideBy(firstNumber) {
     return function(secondNumber) {
        return (secondNumber / firstNumber)
    }
}
function addBy(firstNumber) {
    return function(secondNumber) {
        return (firstNumber + secondNumber)
    }
}

const addBy100 = addBy(100)
const addBy1000 = addBy(1000)
const dividedBy10 = divideBy(10)
const dividedBy100 = divideBy(100)

/* test */

console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20)); 