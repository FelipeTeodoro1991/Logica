// 5. Faça um programa que calcule a potência (potenciação) de um número.
// Para isso ele deve receber dois números de entrada: o primeiro número é a base da
// potência, o segundo número será a potência.
// EX: usuário inseriu 2 para base e 4 para potência.
// O programa imprime :
// 16
// Lembrando: 2

// 4 = 2*2*2*2

var rs = require("readline-sync");
var num1 =  rs.questionInt("Insira o numero base: ")
var num2 = rs.questionInt("Insira o numero que será usado como potencia: ")
var cont = 0

while(cont < num1){
    var resultado = ""
    resultado = num2*num2
    cont++
}
console.log(resultado)