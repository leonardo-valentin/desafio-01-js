const correctAwnser = Math.round(Math.random() * 10)
// ou const correctAwnser = (Math.random() * 10).toFixed(0);
console.log(correctAwnser)

let attemptAwnser = Number(prompt('Adivinhe o número que estou pensando? Está entre 0 e 10: '))

let numberOfTries = 1

while (attemptAwnser !== correctAwnser) {
    attemptAwnser = Number(prompt('Resposta Incorreta!! Tente novamente: '))
    numberOfTries++
}

const checkAttempts = numberOfTries === 1

if (checkAttempts) {
    alert(`Parabéns!! Você adivinhou o número em ${numberOfTries} tentativa!`)
} else {
    alert(`Parabéns!! Você adivinhou o número em ${numberOfTries} tentativas!`)
}