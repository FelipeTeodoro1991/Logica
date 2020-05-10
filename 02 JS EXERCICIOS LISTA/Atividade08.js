// 8. Faça um algoritmo que receba um texto de entrada e diga se a primeira letra é
// maiúscula ou não

var rs = require("readline-sync");
var texto = rs.question("Digite o texto: ");
var Primeira_letra =  texto.charAt(0);
var Primeira_letra_maiscula = Primeira_letra.toUpperCase();


if ( Primeira_letra === Primeira_letra_maiscula){
    console.log("A primeira letra é maiuscula");
}

else{
    console.log("A primeira letra não é maiuscula");
}