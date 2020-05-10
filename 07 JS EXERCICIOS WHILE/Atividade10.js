// 10. Faça um algoritmo que receba um número e imprima todos seus divisores.
// EX : usuário informou 21
// O algoritmo imprime :
// 1
// 3
// 7
// 21
// DICA: Você pode precisar usar a operação de módulo (a%b)

var rs = require("readline-sync");
var numero = rs.questionInt("Diga um numero ");
var cont = numero
var div = ""

while(cont > 0){
if( numero % div == 0){
    console.log(div)
  }
div++;
cont--;   
}

console.log ( numero )
