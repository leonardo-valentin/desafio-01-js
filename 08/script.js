// patientNames = []
// patientNames.push('Leonardo')

const patients = [
    {
    name: 'Leonardo',
    age: 18,
    weight: 70,
    height: 1.75,
    },
    {
    name: 'Pedro',
    age: 20,
    weight: 75,
    height: 1.80,
    },
    {
    name: 'José',
    age: 40,
    weight: 80,
    height: 1.85,
    }]

let patientName = []

for (let patient of patients) {
    patientName.push(patient.name)

    console.log(`O ${patient.name} tem ${patient.age} anos, pesa ${patient.weight} e tem ${patient.height} de altura`)
}

console.log(patientName)