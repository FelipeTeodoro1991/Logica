// 2. Faça um algoritmo que receba peso e altura do usuário e calcule o IMC.
// Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc

// var imc = require("fasam-imc-calc")

var rs = require("readline-sync")
var FasamImc = require('fasam-imc-calc');

var peso =  rs.question
("Qual o seu peso: ")
var altura = rs.questionFloat("Qual a sua altura: ")
 
var imc = new FasamImc(); 

console.log(imc.calc(peso, altura))

