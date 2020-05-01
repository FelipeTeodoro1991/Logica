// 13. Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja
// negativo, imprimindo o resultado.

var nm = require("readline-sync")
numero = nm.questionInt("Digite um numero ")

if (numero >= 0) {
    var dobro = (numero+numero);
    console.log(dobro)
}

else {
    var tripo= numero+numero+numero;
    console.log(tripo)
}
