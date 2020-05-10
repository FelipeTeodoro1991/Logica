// 1. Faça um programa que recebe um número de entrada e repita a mensagem “BIP BIP”
// de acordo com o número inserido.
// EX: usuário inseriu 3
// O programa imprime:
// BIP BIP
// BIP BIP
// BIP BIP

var rs = require("readline-sync");
var Numero = rs.questionInt("Digite um numero: ");
var cont = 0
while(cont < Numero){
    console.log(`${cont+1} BIP BIP`)
    cont++
}