// 5. (FULL JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso peça
// 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
// jogador B.
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
// que apenas o jogador A e B colocou sem repetir nenhum número
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// 1,2,3,4,5,7,8

var rs = require("readline-sync")
var jg1 = rs.question("Informe o nome do primeiro jogador: ")
var jg1 = rs.question("Informe o nome do segundo jogador: ")
var numerosjg1 = []
var numerosjg2 = []
var imprimenumeros = []

function pedenumeros(rs){ 
    var numeros = rs.question(`Informe o numero: `)
    return numeros
}

// function comparanumeros(numerosjg1, numerosjg2, imprimenumeros){
    // if(!numerosjg1.includes(numerosjg2[i]))
    //     imprimenumeros.push(numerosjg2[i])
    // }
    

// }
// for (i = 0; i < 5; i++){}

for (var i = 0; i < 5; i++){
    var numero = pedenumeros(rs)
    numerosjg1.push(numero)
}
for (var i = 0; i < 5; i++){
    var numero = pedenumeros(rs)
    numerosjg2.push(numero)
}

for (var i = 0; i < 5; i++){
    if(!numerosjg1.includes(numerosjg2[i]))
    imprimenumeros.push(numerosjg2[i])
    imprimenumeros.push(numerosjg1[i])
}


console.log(imprimenumeros);
