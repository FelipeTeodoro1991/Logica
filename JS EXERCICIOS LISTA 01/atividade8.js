// Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é
// Equilátero, Isósceles ou Escaleno.
// Sendo que:
// − Triângulo Equilátero: possui os 3 lados iguais.
// − Triângulo Isóscele: possui 2 lados iguais.
// − Triângulo Escaleno: possui 3 lados diferentes.
var md = require("readline-sync")
var medida1 = md.question("Qual a medidade do primeiro lado? ")
var medida2 = md.question("Qual a medidade do segundo lado? ")
var medida3 = md.question("Qual a medidade do terceiro lado? ")

if (medida1 == medida2 && medida2 == medida3){
    console.log("TRIANGULO EQUILATERO")
}

else if ( medida1 == medida2 || medida2 == medida3 || medida3 == medida1){
    console.log("TRIANGULO ISÓSCELE")
}

else if ( medida1 != medida2 && medida2 != medida3){
    console.log("TRIANGULO ESCALENO")
}
