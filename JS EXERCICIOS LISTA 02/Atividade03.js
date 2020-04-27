// 3. Fazer um programa que leia um valor de DDI e informe o nome do país
// Correspondente ao DDI. Por exemplo:
// Se lê 1 imprime "Estados Unidos",
// Se lê 49 imprime "Alemanha",
// Se lê 54 imprime "Argentina",
// Se lê 55 imprime "Brasil",
// // Se lê 35 imprime "Portugal".
// Deve também imprimir uma mensagem caso o DDI não esteja cadastrado.

var tf = require("readline-sync")
var DDI = tf.questionInt("Digite o seu DDI ")
var DDD = tf.questionInt("Digite o seu DDD ")
var NUMERO_TELEFONE = tf.questionInt("Digite o numero do seu telefone  ")

if( DDI == "1"){
    console.log("Estados Unidos")
    }
else if( DDI == "49"){
    console.log("Alemanha")
    }
else if( DDI == "54"){
    console.log("Argentina")
    }
else if( DDI == "55"){
    console.log("Brasil")
    }
else if( DDI == "33"){
    console.log("Portugal")
    }

else {
console.log("DDI não cadastrado")
}