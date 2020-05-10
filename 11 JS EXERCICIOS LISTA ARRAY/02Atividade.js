// 2. (INNER JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso
// peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
// jogador B.
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
// iguais que o jogador A e B colocaram.
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// 1,2,3

var rs = require("readline-sync")
var jg1 = rs.question("Informe o Nome do jogador1: ")
var jg2 = rs.question("Informe o Nome do jogador2: ")
var Numjg1 = []
var Numjg2 = []
var ComparaNumeros = []

for (var i = 0; i < 5; i++){
var pedenumero = rs.questionInt(` ${jg1}, informe  ${i+1}numero de 0 a 10: `)
Numjg1.push(pedenumero)
}
for (var i = 0; i < 5; i++){
    var pedenumero = rs.questionInt(`${jg2}, Informe ${i+1}numero de 0 a 10: `)
    if (Numjg1.includes(pedenumero)){ComparaNumeros.push(pedenumero)}
    Numjg2.push(pedenumero)
}

console.log(`Os numeros escolhidos por ${jg1} foram ${Numjg1}`);
console.log(`Os numeros escolhidos por ${jg2} foram ${Numjg2}`);
console.log(`Os numeros iguais foram ${ComparaNumeros}`)