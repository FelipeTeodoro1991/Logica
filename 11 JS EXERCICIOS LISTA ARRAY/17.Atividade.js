// 17. Faça um algoritmo que receba um texto e imprima ele em letra maisucula novamente.
// Utilize o método toUpperCase()

var rs = require("readline-sync");
var texto = rs.question("Digite o texto").toUpperCase();

console.log(texto)