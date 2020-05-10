// Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o
// triângulo é Acutângulo, Retângulo ou Obtusângulo.
// Sendo que:
// − Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
// − Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
// − Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)

var ag =  require("readline-sync")
var angulo1 = ag.question(" Qual o valor do primeiro angulo? ")
var angulo2 = ag.question(" Qual o valor do segundo angulo? ")
var angulo3 = ag.question(" Qual o valor do terceiro angulo? ")

if ( angulo1 == 90 || angulo2 == 90 || angulo3 == 90){
    console.log("TRIANGULO RETANGULO")
}

else if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90){
    console.log("TRIANGULO OBTUSANGULO")
}

else if (angulo1 < 90 && angulo2 < 90 &&  angulo3 < 90 ){
    console.log("TRIANGULO ACUTANGULO")
}

