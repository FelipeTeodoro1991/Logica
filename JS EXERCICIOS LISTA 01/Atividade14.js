// 14. Faça um programa para ler dois números inteiros A e B e informar se A é divisível por B.

var nm = require("readline-sync")
var numeroA = nm.questionInt("Informe o numero 'A'? ")
var numeroB = nm.questionInt("Informe o numero 'B'? ")


if (numeroA % numeroB == 0){
 console.log("A é divisivel por B ")
}

else{ console.log ("A não é divisivel por B")}