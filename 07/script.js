let option
let productsList = []

while(option !== 3) {
    option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
    `))


    switch (option) {
        case 1:
            productsList.push(prompt('Digite o item a ser cadastrado: '))
            break;
        case 2:
            if (productsList.length == 0) {
                alert('Não existem itens cadastrados')
            } 
                
            else {
                alert(productsList)
            }
            break;
        case 3:
            break;
        default:
            alert('Opção inválida, tente novamente!')
            break;
    }
}