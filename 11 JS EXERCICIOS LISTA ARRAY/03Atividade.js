// 3. (LEFT JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso peça
// 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
// jogador B.
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
// que apenas o jogador A colocou diferente do B.
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// 4,5

var rs = require("readline-sync")
var Nome1 = rs.question("Qual o nome do primeiro Jogador? ") 
var Nome2 = rs.question("Qual o nome do segundo Jogador? ") 
var Nmjogador1 = []
var Nmjogador2 = []
var Comparanumeros = []

function PedeNumero (rs){
var numero = rs.question("Informe o numero ")
return numero
}

console.log(`${Nome1} informe 5 numeros `)

for (var i = 0; i < 5; i++ ){
    var numeros = PedeNumero(rs)
    Nmjogador1.push(numeros)    
}

console.log(`${Nome2} informe 5 numeros `)


for (var i = 0; i < 5; i++ ){
    var numeros = PedeNumero(rs)
    Nmjogador2.push(numeros)    
}

for(var i = 0; i < 5; i++){
if (!Nmjogador2.includes(Nmjogador1[i])){
    Comparanumeros.push(Nmjogador1[i])
}
}
// for(var i = 0; i < 5; i++){
// if (!Nmjogador1.includes(Nmjogador2[i])){
//     Comparanumeros.push(Nmjogador2[i])
// }
// }

console.log(`Os numeros escolhidos por ${Nome1} diferentes do numeros esoclhidos por ${Nome2} foram ${Comparanumeros}`)

