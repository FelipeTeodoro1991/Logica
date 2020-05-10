// 6. Faça um programa que pergunta ao usuário :
// “Insira 0 para sair ou qualquer outra tecla para o continuar.”
// Se o usuário inserir 0 o programa encerra.
// Se o usuário inserir qualquer outra coisa o programa pergunta novamente :
// “Insira 0 para sair ou qualquer outro número para o continuar.”
// Até o usuário sair


var rs = require("readline-sync");
var fechar_programa = rs.question("Insira 0 para sair ou 1 para continuar: ");

while(fechar_programa != "0"){
    var fechar_programa = rs.question("Insira 0 para sair ou qualquer outra tecla para continuar: ");
}
console.log("obrigado. Volte sempre")


