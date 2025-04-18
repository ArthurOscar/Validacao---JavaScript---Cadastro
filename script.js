//Automatização CPF
let cpf = document.querySelector('#cpf')

cpf.addEventListener('keypress', () => {
    let cpfLength = cpf.value.length

    if (cpfLength == 3 || cpfLength == 7) {
        cpf.value += '.'
    }else if (cpfLength == 11) {
        cpf.value += '-'
    }
})


//Atuomatização telefone
let telefone = document.querySelector('#telefone')

telefone.addEventListener('keypress', () => {
    let telefonelength = telefone.value.length
    
    if (telefonelength == 0){
        telefone.value += '('
    } if (telefonelength == 3){
        telefone.value += ')'
    } else if(telefonelength == 9){
        telefone.value += '-'
    }
})


//Validação
function validarDados() {
    //CLIENTE
    let validacao_cliente = true
    //nome
    let nome = document.getElementById('nome')
    if (nome.value === "") {
        alert('Por favor, insira seu nome')
        validacao_cliente = false
    } if (/[0-9]/g.test(nome.value)) {
        alert('Por favor, somente letras no nome')
        validacao_cliente = false
    }

    //sobrenome
    let sobrenome = document.getElementById('sobrenome')
    if (sobrenome.value === "") {
        alert('Por favor, insira seu sobrenome')
        validacao_cliente = false
    } if (/[0-9]/g.test(sobrenome.value)) {
        alert('Por favor, somente letras no sobrenome')
        validacao_cliente = false
    }

    //idade
    let idade = document.getElementById('idade')
    if (idade.value === "") {
        alert('Por favor, insira sua idade')
        validacao_cliente = false
    } if (idade.value < 18) {
        alert('É necessário ser maior de idade para se cadastrar')
        validacao_cliente = false
    }

    //cpf
    let cpfNumeros = cpf.value.replace('.', '')
    cpfNumeros = cpfNumeros.replace('.', '')
    cpfNumeros = cpfNumeros.replace('-', '')

    const cpfRegex = /^\d{11}$/;
    if (!cpfRegex.test(cpfNumeros)) {
        alert('Por favor, insira um CPF em um formato válido')
        validacao_cliente = false
    }

    //telefone
    let telefoneNumeros = telefone.value.replace('(', '')
    telefoneNumeros = telefoneNumeros.replace(')', '')
    telefoneNumeros = telefoneNumeros.replace('-', '')

    const telefoneRegex = /^\d{11}$/;
    if (!telefoneRegex.test(telefone.value)) {
        alert('Telefone deve conter 11 dígitos (DDD + número)')
        validacao_cliente = false
    }

    //email
    let email = document.getElementById('email').value
    const emailValido = emailValidar(email)
    if (emailValido) {
        validacao_cliente = true
    } else {
        alert('Insira corretamente o email cliente')
        validacao_cliente = false
    }
    //final
    if (validacao_cliente === true) {
        alert('Cadastro Concluido')
    }
}

//Email formato correto
const emailValidar = (email) => {
    const emailRegex = /^[^\s]+@[^\s]+\.[^\s]+$/
    return emailRegex.test(email)
}