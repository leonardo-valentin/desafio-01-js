let firstNumber = Number(prompt("Digite um número: "))
let secondNumber = Number(prompt("Digite outro número: "))

function sum(number1, number2) {
    return number1 + number2
}

function subtract(number1, number2) {
    return number1 - number2
}

function divide(number1, number2) {
    return number1 / number2
}

function multiply(number1, number2) {
    return number1 * number2
}

function restOfDivision(number1, number2) {
    return number1 % number2
}

alert(sum(firstNumber, secondNumber))
alert(subtract(firstNumber, secondNumber))
alert(divide(firstNumber, secondNumber))
alert(multiply(firstNumber, secondNumber))
alert(restOfDivision(firstNumber, secondNumber))

let isPair = (sum(firstNumber, secondNumber)) % 2 === 0

if (isPair) {
    alert("A soma dos dois números é par")
} else {
    alert("A soma dos dois números é ímpar")
}

if (firstNumber === secondNumber) {
    alert("Os dois números são iguais")
} else {
    alert("Os dois números são diferentes")
}