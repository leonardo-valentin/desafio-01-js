let numberOne = Number(prompt("Digite um numero: "))
let numberTwo = Number(prompt("Digite outro numero: "))

let operacao = prompt(`Qual operação matemática deseja fazer?
 (+ -> Adição
  - -> Subtração
  * -> Multiplicação 
  / -> Divisão)`)
let result

switch (operacao) {
    case "+":
        result = numberOne + numberTwo
        alert(result)
        break
    case "-":
        result = numberOne - numberTwo
        alert(result)
        break
    case "*":
        result = numberOne * numberTwo
        alert(result)
        break
    case "/":
        result = numberOne / numberTwo
        alert(result)
        break
    default:
        alert("Operação não existente, tente novamente com uma operação válida")
        break
}