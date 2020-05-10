// 4. (RIGHT JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso
// peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
// jogador B.
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
// que apenas o jogador B colocou diferente do A.
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// 8,7

var rs = require("readline-sync")
var Nome1 = rs.question("Informe o nome do Jogado1: ")
var Nome2 = rs.question("Informe o nome do Jogado2: ")
var numerosjg1 = []
var numerosjg2 = []
var compararnumeros = []

function ComparaNumeros(rs){
  var numero = rs.question(` Informe o ${i+1} numero: `)
    return numero
}

console.log(`${Nome1} Informe 5 numeros de 0 a 10`)
for ( i = 0; i < 5; i++){
   numerosjg1.push(ComparaNumeros(rs))
}

console.log(`${Nome2} Informe 5 numeros de 0 a 10`)
for ( i = 0; i < 5; i++){
   numerosjg2.push(ComparaNumeros(rs))
}

for ( i = 0; i < 5; i++ ){
    if (!numerosjg1.includes(numerosjg2[i])){
        compararnumeros.push(numerosjg2[i])
    }
}

console.log(`Os numeros escolhidos por ${Nome2} diferentes do numeros esoclhidos por ${Nome1} foram ${compararnumeros}`)