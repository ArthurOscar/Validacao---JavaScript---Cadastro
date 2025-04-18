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
    if (!telefoneRegex.test(telefoneNumeros)) {
        alert('Telefone deve conter 11 dígitos (DDD + número)')
        validacao_cliente = false
    }
    
    //email
    let email = document.getElementById('email').value
    const emailValido = emailValidar(email)
    if (emailValido) {} else {
        alert('Insira corretamente o email cliente')
        validacao_cliente = false
    }
    
    //Cadastro veiculo
    let validacao_veiculo = true
    
    //Marca
    let marca = document.querySelector('#marca')
    if (marca.value === "") {
        alert('Insira a marca do veículo')
        validacao_veiculo = false
    } else if (/[0-9]/g.test(marca.value)) {
        alert('Somente letras na marca do veículo')
        validacao_veiculo = false
    }
    
    //Modelo
    let modelo = document.querySelector('#modelo')
    if (modelo.value === '') {
        alert('Insira o modelo do veículo')
        validacao_veiculo = false
    }
        
    //Ano
    let ano = document.querySelector('#ano')
    if (ano.value === "") {
        alert('Insira o ano do veículo')
        validacao_veiculo = false
    } else if (ano.value < 1950) {
        alert('Somente veículos acima de 1950')
        validacao_veiculo = false
    }

    //Tipo veiculo
    for (let i = 0; i < 3; i++){
        let tipo = document.querySelector('#tipo'[i]).value
        if (tipo[i] === '') {
            alert('Selecione o tipo de veículo')
            validacao_veiculo = false
        };
    }
    
    //placa
    let placa_veiculo = document.querySelector('#placa')
    if((placa_veiculo === '') || (placa_veiculo < 7)){
        alert('Insira corretamente a placa do veículo')
    } 

    //data da compra
    let data = document.querySelector('#data_compra')
    console.log(data.value)
    if (data.value === '') {
        alert('Insire a data de compra')
        validacao_veiculo = false
    }
    
    //km rodado
    let km_rodado = document.querySelector('#km_rodado')
    if (km_rodado === '') {
        alert('Insira os Km rodados')
        validacao_veiculo = false
    } else if ((/[a-z]/g.test(km_rodado.value))) {
        alert('Somente números nos km rodados')
        validacao_veiculo = false
    }
    
    //Tipo de combustivel
    for (i = 0; i < 6; i++){
        let tipo_gasolina = document.querySelector('#tipo_gasolina'[i]).value
        if (tipo[i] === '') {
            alert('Selecione o tipo de combustivel do veículo')
            validacao_veiculo = false
        };
    }
}

//Email formato correto
const emailValidar = (email) => {
    const emailRegex = /^[^\s]+@[^\s]+\.[^\s]+$/
    return emailRegex.test(email)
}