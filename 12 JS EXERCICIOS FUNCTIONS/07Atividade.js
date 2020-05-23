// 7. . Faça uma função que recebe um número e devolve seu valor absoluto.
// No final peça um número para o usuário e exiba o valor absoluto.


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