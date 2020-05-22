// 6. Escreva uma função que receba dois números o primeiro será a base e o segundo a
// potência e no final a função retorna a base elevada pela potência.
// Faça um programa que peça ao usuário a base e a potência e forneça para a função,
// no final imprima o resultado.
// OBS: O algoritmo só precisa saber lidar com números inteiros.

function calculaBaseEhPotencia(a,b){
    var calcular = a**b
    return calcular
}

var rs = require("readline-sync");
var n1 = rs.questionInt("Informe o numero base para calcular: ")
var n2 = rs.questionInt("Informe o numero que sera a potencia para calcular: ")

console.log(calculaBaseEhPotencia(n1,n2));
