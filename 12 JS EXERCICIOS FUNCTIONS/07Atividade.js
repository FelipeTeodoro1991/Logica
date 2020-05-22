// 7. . Faça uma função que recebe um número e devolve seu valor absoluto.
// No final peça um número para o usuário e exiba o valor absoluto.

//a=5
//b=6

// function numeroAbsoluto(a){
//    var soma = 0
//     for(i=0; i < a; i++){
//         if(a % i ==0 ){
//         soma = soma + i
//         }
//     }
// if( soma == a){
//     return true
// }
// else {return false
// }

// }

function numeroAbsoluto(a) {
    if (a > 0) {
        for (var i = 0; a > i; a--) {
            console.log(a)
        }
    }
    else {
        for (var i = 0; a < i; a++) {
            console.log(a)
        }
    }
}
var rs = require("readline-sync");
var n1 = rs.questionInt("Informe o numero para calcular: ")

numeroAbsoluto(n1)