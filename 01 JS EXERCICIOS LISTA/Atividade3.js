var for_senha = require("readline-sync")
var senha_dig = for_senha.question("Por favor, digite sua senha:")
var senha = 1234

if (senha_dig == senha){
    console.log("ACESSO PERMITIDO")
}

else {
    console.log("ACESSO NEGADO")
}
