let studentName = prompt("Digite o nome do estudante: ")
let studentGrades1 = Number(prompt("Digite a primeira nota do bimestre: (Menor que 10)"))
let studentGrades2 = Number(prompt("Digite a segunda nota do bimestre: (Menor que 10)"))
let studentGrades3 = Number(prompt("Digite a terceira nota do bimestre: (Menor que 10)"))

let average = ((studentGrades1 + studentGrades2 + studentGrades3)/3).toFixed(2)

let result = average >=6

let gradesVerifier = studentGrades1 <= 10 && studentGrades2 <= 10 && studentGrades3 <= 10

if (gradesVerifier) {
    if (result) {
        alert(`Parabens, ${studentName}, você passou de bimestre com a nota de: ${average}`)
    } else if(average < 3) {
        alert(`Reprovado`)
    } else {
        alert(`Poxa, ${studentName}, você não passou de bimestre, pois faltaram ${6 - average} pontos na nota, estude um pouco mais e faça a recuperação! Tudo dará certo :D`)
    }
} else {
        alert(`Alguma nota inválida, digite notas com o valor de 0 a 10. Tente novamente`)
}   