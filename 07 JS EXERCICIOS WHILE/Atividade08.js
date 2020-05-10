// 8. Faça um algoritmo que receba uma palavra e imprima cada caractere da palavra em
// uma linha.
// EX: usuário informou MAÇÃ
// O algoritmo imprime:
// M
// A
// Ç
// Ã

var rs = require("readline-sync");
var palavra = rs.question("digite uma paralavra ");
var pl = palavra.length
var pl2 = palavra.split("")
var cont = 0  

while(cont < pl){
    console.log(pl2[cont])
      cont++
}

