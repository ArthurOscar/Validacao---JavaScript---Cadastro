function validarDados() {
    let nome = document.getElementById('nome')
    if (nome.value === ""){
        alert('Por favor, insira seu nome')
    } if(/[0-9]/g.test(nome.value)){
        alert('Por favor, somente letras no seu nome')
    } else {
        console.log(nome.value)
    }

    let sobrenome = document.getElementById('sobrenome')
    if (sobrenome.value === ""){
        alert('Por favor, insira seu sobrenome')
    } if(/[0-9]/g.test(sobrenome.value)){
        alert('Por favor, somente letras no seu nome')
    } else {
        console.log(sobrenome.value)
    }

    let idade = document.getElementById('idade')
    if (idade.value === ""){
        alert('Por favor, insira sua idade')
    } if(idade.value < 18){
        alert('É necessário ser maior de idade para se cadastrar')
    } else {
        console.log(idade.value)
    }

    let cpf = document.getElementById('cpf')
    let tamanhocpf = cpf.value
    if (tamanhocpf.value < 14){
        alert('CPF incorreto')
    }

    let telefone = document.getElementById('telefone')
    if (telefone.value != "") {
        console.log(telefone.value)
    } else{
        alert('Por favor, insira seu telefone')
    }

    let email = document.getElementById('email')
    if (email.value != "") {
        console.log(email.value)
    } else{
        alert('Por favor, insira seu email')
    }
}