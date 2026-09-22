function confirmarLogin(){

    let  usuario = document.getElementById("usuario").value;
    let  senha = document.getElementById("senha").value;

    if (usuario === "Login" && senha === "1234"){
        resultado = ("Login feito com sucesso!");
    }else{
        resultado = ("usuario ou senha inválidos");
    }

    document.getElementById("resultado").textContent = resultado;
}