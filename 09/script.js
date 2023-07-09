const patients = [
    {
    name: 'Leonardo',
    age: 18,
    weight: 70,
    height: 175,
    },
    {
    name: 'Pedro',
    age: 20,
    weight: 75,
    height: 180,
    },
    {
    name: 'José',
    age: 40,
    weight: 80,
    height: 185,
    }]

for (let patient of patients) {
    let messageIMC = mostrarMensagem(patient)
    console.log(mostrarMensagem(patient))
}

function calcularIMC(peso, altura) {
    return (peso / (altura/100)**2).toFixed(2)
}

function mostrarMensagem(patient) {
    return `O ${patient.name} tem o IMC de ${calcularIMC(patient.weight, patient.height)}`
}