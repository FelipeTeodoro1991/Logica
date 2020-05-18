// 16. Faça um algoritmo que verifica se uma string comece com a palavra google
// Caso comece imprima que a palavra é valida se não diga que não conhece o serviço.
// EX: entrada Google drive
// O algoritmo imprime
// Palavra valida
// Utilize o método startsWith()

var rs = require("readline-sync");
var texto = rs.question(" Informe o nome do serviço Google: ").toUpperCase();


if ( texto.startsWith("GOOGLE") == true){

    console.log("A palavra é valida")
}
else{
    console.log("Texto desconhecido")
}