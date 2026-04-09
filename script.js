let doadores = [];

function validarFormulario() {

    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let idade = document.getElementById("idade").value
    let peso = document.getElementById("peso").value
    let tipo = document.getElementById("tipo").value
    let telefone = document.getElementById("telefone").value
    let cidade = document.getElementById("cidade").value
    let estado = document.getElementById("estado").value

    if(nome === "" || email === "" || idade === "" || peso === "" || tipo === "" || telefone === "" || cidade === "" || estado === ""){
        alert("Todos os campos são obrigatórios")
        return false
    }

    if(nome.split(" ").length < 2){
        alert("Informe nome e sobrenome")
        return false
    }

    if(!email.includes("@") || !email.includes(".")){
        alert("Email inválido")
        return false
    }

    if(idade < 16){
        alert("Idade mínima é 16 anos")
        return false
    }

    if(peso < 50){
        alert("Peso mínimo é 50kg")
        return false
    }

    if(tipo === ""){
        alert("Selecione o tipo sanguíneo")
        return false
    }

    if(isNaN(telefone)){
        alert("Telefone deve conter apenas números")
        return false
    }

    let doador = {
        nome: nome,
        email: email,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipo,
        telefone: telefone,
        cidade: cidade,
        estado: estado
    }

    doadores.push(doador)

    console.log(doadores)

    alert("Cadastro realizado!")

    return false
}
