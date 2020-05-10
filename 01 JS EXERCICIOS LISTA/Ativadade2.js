var Numero = require("readline-sync")
var Res_Numero = Numero.question("Digite um numero?")


if (Res_Numero%2 == 0){
    console.log("O numero "+Res_Numero+" É um numero par")
}

else {
    console.log("O numero "+Res_Numero+" É um numero impar")
}
