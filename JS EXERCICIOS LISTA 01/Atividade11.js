// Faça um programa que receba três notas, calcule e mostre a média aritmética entre
// elas, caso a média aritmética seja:
// Media maior ou igual a 7 imprimir :
// ALUNO APROVADO
// Media menor que 7 imprimir :
// ALUNO REPROVADO

var nt = require("readline-sync")
var nota1 = nt.questionInt("Ditite a primeira nota?")
var nota2 = nt.questionInt("Ditite a segunda nota?")
var nota3 = nt.questionInt("Ditite a terceira nota?")

var media = ((nota1+nota2+nota3)/3)


if (media >= 7){
    console.log("ALUNO APROVADO")
}
else{
    console.log("ALUNO REPROVADO")
}