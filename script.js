function validarDados() {
    //CLIENTE
    //nome
    let nome = document.getElementById('nome')
    if (nome.value === ""){
        alert('Por favor, insira seu nome')
    } if(/[0-9]/g.test(nome.value)){
        alert('Por favor, somente letras no nome')
    }

    //sobrenome
    let sobrenome = document.getElementById('sobrenome')
    if (sobrenome.value === ""){
        alert('Por favor, insira seu sobrenome')
    } if(/[0-9]/g.test(sobrenome.value)){
        alert('Por favor, somente letras no sobrenome')
    }

    //idade
    let idade = document.getElementById('idade')
    if (idade.value === ""){
        alert('Por favor, insira sua idade')
    } if(idade.value < 18){
        alert('É necessário ser maior de idade para se cadastrar')
    }

    //cpf
    let cpf = document.getElementById('cpf')
    let cpfNumeros = cpf.value.replace('.', '');
    cpfNumeros = cpfNumeros.replace('.','');
    cpfNumeros = cpfNumeros.replace('-','');

    const cpfRegex = /^\d{11}$/;
    if (!cpfRegex.test(cpfNumeros)) {
        alert('Por favor, insira um CPF em um formato válido');
    }

    //telefone
    let telefone = document.getElementById('telefone')
    const telefoneRegex = /^\d{11}$/;
    if (!telefoneRegex.test(telefone.value)) {
        alert('Telefone deve conter 11 dígitos (DDD + número)');
    }

    //email
    let email = document.getElementById('email')
    if (email.value != "") {
        alert('Por favor, insira seu email corretamente')
    }

    //VEÍCULO
}