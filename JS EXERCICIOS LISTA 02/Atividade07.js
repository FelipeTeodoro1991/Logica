// 7. Elabore um programa para testar se uma senha digitada é igual a “batatafrita”.
// Se a senha estiver correta escreva
// “Acesso permitido”,
// do contrário emita a mensagem
// “Você não tem acesso ao sistema”.
var sn = require("readline-sync");
var Senha_digitada = sn.question("Digite a senha para acessar o sistema: ");

if ( Senha_digitada === "batatafrita"){
    console.log("Acesso permitido");
}

else{
    console.log("Você não tem acesso ao sistema");
}