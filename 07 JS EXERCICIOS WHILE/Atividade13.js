// 13.Fazer um algoritmo que receba 5 números e mostra o produto dos ímpares e
// a soma dos pares
// EX: valores fornecidos 1,2,3,4,5
// Impares -> 1 * 3 * 5 = 15
// Pares -> 2 = 4 = 6
// O programa imprime :
// Produtos dos impares : 15
// // Soma dos pares : 6
// var n1 = rs.questionInt("Informe o primeiro numero ")
// var n2 = rs.questionInt("Informe o segundo numero ")
// var n3 = rs.questionInt("Informe o terceiro numero ")
// var n4 = rs.questionInt("Informe o quarto numero ")
// var n5 = rs.questionInt("Informe o quinto numero ")

var rs = require("readline-sync")

var cont = 0
var impares = 1 
var pares = 0
var str_pares = ""
var str_impares=""

while(cont < 5 ){
    var numero = rs.questionInt("Informe um numero ")
    if (numero %2 == 0 ){
        var pares = pares + numero
        var str_pares = str_pares + numero+"+";
    }
    else if(numero %2 != 0 ){
        var impares = impares * numero
        var str_impares = str_impares + numero+"*";
    }
    cont++
}
console.log (str_pares+"="+pares)
console.log (str_impares+"="+impares)