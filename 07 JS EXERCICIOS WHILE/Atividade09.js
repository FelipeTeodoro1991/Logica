// 9. Faça um algoritmo que receba uma palavra e imprima ela ao contrário.
// EX: usuário informou BANANA
// Algoritmo imprime:
// ANANAB

var rs = require("readline-sync");
var palavra = rs.question("digite uma paralavra ");
var cont = palavra.length
var letra = palavra.split("")
var palavra_ao_contrario = ""
var contrario = ""

while(cont > 0){
palavra_ao_contrario = letra[cont-1]; 
contrario = contrario + palavra_ao_contrario;
cont--;
}

console.log(contrario)