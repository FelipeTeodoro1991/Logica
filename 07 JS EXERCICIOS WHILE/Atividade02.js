// 2. Criar um algoritmo que realize a multiplicação de dois números maiores que zero SEM
// usar o operador de multiplicação (*)

var rs = require("readline-sync");
var num1 = rs.questionInt("Digite o numero 1: ");
var num2 = rs.questionInt("Digite o numero 2: ");
var cont = 0

var resultado = 0

while(cont < num1){
     resultado= resultado+num2;
     cont++
}

console.log(resultado)