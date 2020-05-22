// 5. Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
// Solicite dois números para o usuário e forneça como argumento para esta função.
// Escreva o resultado da função na tela dizendo qual menor número.
var rs = require("readline-sync");
var n1 = rs.questionInt("Informe o primeiro numero: ")
var n2 = rs.questionInt("Informe o segundo numero: ")

function calculaMaior (a,b){
    if( a > b){
        console.log(`O numero ${a} é maior que o numero ${b}`)
    }
    else if( b > a){
        console.log(`O numero ${b} é maior que o numero ${a}`)
    }
    else{ console.log(`Os numeros ${a} e ${b} são iguais`)
}
}

calculaMaior(n1,n2)