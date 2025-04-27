//Automatização CPF
let cpf = document.querySelector('#cpf')

cpf.addEventListener('keypress', () => {
    let cpfLength = cpf.value.length

    if (cpfLength == 3 || cpfLength == 7) {
        cpf.value += '.'
    } else if (cpfLength == 11) {
        cpf.value += '-'
    }
})


//Atuomatização telefone
let telefone = document.querySelector('#telefone')

telefone.addEventListener('keypress', () => {
    let telefonelength = telefone.value.length

    if (telefonelength == 0) {
        telefone.value += '('
    } if (telefonelength == 3) {
        telefone.value += ')'
    } else if (telefonelength == 9) {
        telefone.value += '-'
    }
})

//Calcular Valor
function calcularValor() {
    if (document.querySelector('#tipo').value === ('carro') || document.querySelector('input[name="tipo_servico"]:checked').value === ('pintura')){
        document.querySelector("#valor").value = "R$" + 200.00;
    } if (document.querySelector('#tipo').value === ('carro') || document.querySelector('input[name="tipo_servico"]:checked').value === ('limpeza')){
        document.querySelector("#valor").value = "R$" + 100.00;
    } if (document.querySelector('#tipo').value === ('carro') || document.querySelector('input[name="tipo_servico"]:checked').value === ('revisão')){
        document.querySelector("#valor").value = "R$" + 150.00;
    } if (document.querySelector('#tipo').value === ('carro') || document.querySelector('input[name="tipo_servico"]:checked').value === ('conserto')){
        document.querySelector("#valor").value = "R$" + 300.00;
    } if (document.querySelector('#tipo').value === ('Caminhão') || document.querySelector('input[name="tipo_servico"]:checked').value === ('pintura')){
        document.querySelector("#valor").value = "R$" + 300.00;
    } if (document.querySelector('#tipo').value === ('Caminhão') || document.querySelector('input[name="tipo_servico"]:checked').value === ('limpeza')){
        document.querySelector("#valor").value = "R$" + 400.00;
    } if (document.querySelector('#tipo').value === ('Caminhão') || document.querySelector('input[name="tipo_servico"]:checked').value === ('revisão')){
        document.querySelector("#valor").value = "R$" + 456.00;
    } if (document.querySelector('#tipo').value === ('Caminhão') || document.querySelector('input[name="tipo_servico"]:checked').value === ('conserto')){
        document.querySelector("#valor").value = "R$" + 390.00;
    } if (document.querySelector('#tipo').value === ('Caminhote') || document.querySelector('input[name="tipo_servico"]:checked').value === ('pintura')){
        document.querySelector("#valor").value = "R$" + 450.00;
    } if (document.querySelector('#tipo').value === ('Caminhote') || document.querySelector('input[name="tipo_servico"]:checked').value === ('limpeza')){
        document.querySelector("#valor").value = "R$" + 670.00;
    } if (document.querySelector('#tipo').value === ('Caminhote') || document.querySelector('input[name="tipo_servico"]:checked').value === ('revisão')){
        document.querySelector("#valor").value = "R$" + 299.00;
    } if (document.querySelector('#tipo').value === ('Caminhote') || document.querySelector('input[name="tipo_servico"]:checked').value === ('conserto')){
        document.querySelector("#valor").value = "R$" + 223.00;
    }
  }


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

    const cpfRegex = /^\d{11}$/
    if (!cpfRegex.test(cpfNumeros)) {
        alert('Por favor, insira um CPF em um formato válido')
        validacao_cliente = false
    }

    //telefone
    let telefoneNumeros = telefone.value.replace('(', '')
    telefoneNumeros = telefoneNumeros.replace(')', '')
    telefoneNumeros = telefoneNumeros.replace('-', '')

    const telefoneRegex = /^\d{11}$/
    if (!telefoneRegex.test(telefoneNumeros)) {
        alert('Telefone deve conter 11 dígitos (DDD + número)')
        validacao_cliente = false
    }

    //email
    let email = document.getElementById('email').value
    const emailValido = emailValidar(email)
    if (emailValido) { } else {
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
    let tipo_veiculo = document.querySelector('input[name="tipo_veiculo"]:checked')
    if (!tipo_veiculo) {
        alert('Selecione o tipo de veículo')
        validacao_veiculo = false
    }

    //placa
    let placa_veiculo = document.querySelector('#placa')
    if (placa_veiculo.value === '') {
        alert('Insira a placa do veículo')
        validacao_veiculo = false
    } else if (placa_veiculo.value.length < 7) {
        alert('A placa deve ter 7 caracteres')
        validacao_veiculo = false
    } else if (/[a-z]/.test(placa_veiculo.value)) {
        alert('A placa não pode conter letras minúsculas - use apenas MAIÚSCULAS')
        validacao_veiculo = false
    }

    //data da compra
    let data = document.querySelector('#data_compra')
    if (data.value === '') {
        alert('Insire a data de compra')
        validacao_veiculo = false
    } else if (data.value < ano.value) {
        alert('Data de compra incorreta, compra antes do ano de lançamento do veículo')
        validacao_veiculo = false
    }

    //km rodado
    let km_rodado = document.querySelector('#km_rodado').value
    if (km_rodado === '') {
        alert('Insira os Km rodados')
        validacao_veiculo = false
    }

    //Tipo de combustivel
        let tipo_gasolina = document.querySelector('input[name="tipo_gasolina"]:checked')
        if (tipo_gasolina === null) {
            alert('Selecione o tipo de combustivel do veículo')
            validacao_veiculo = false
        }

        
        //Tipo de serviço
        let validacao_servico = true
        
        //Tipo de servico
        let tipo_servico = document.querySelector('input[name="tipo_servico"]:checked')
        if (!tipo_servico) {
            alert('Selecione o tipo de serviço')
            validacao_servico = false
        }

        //Validação final
        if (validacao_cliente === false) {
            alert('Por favor, verifique os campos do cadastro do cliente')
        } if (validacao_veiculo === false) {
            alert('Por favor, verifique os campos do cadastro do veículo')
        } else {
            alert('Cadastro concluido')
            location.reload()
        }
    }

//Email formato correto
const emailValidar = (email) => {
    const emailRegex = /^[^\s]+@[^\s]+\.[^\s]+$/
    return emailRegex.test(email)
}