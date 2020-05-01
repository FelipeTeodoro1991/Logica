// Escreva um programa para ler o número de lados de um polígono regular e a medida do
// lado (em cm). Calcular e imprimir o seguinte:
// − Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor da área
// − Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área.
// − Se o número de lados for igual a 5 escrever PENTÁGONO.
var ld = require("readline-sync")
var cm = require("readline-sync")
var lados_poligono = ld.question("Quantos lados possui o seu polígono? digite 3 para triangulo, 4 para quadrado ou 5 para pentagono ")
while (lados_poligono != 3 && lados_poligono != 4 && lados_poligono != 5){
var lados_poligono = ld.question("Por favor digit um numeto entre 3 e 5: digite 3 para triangulo, 4 para quadrado ou 5 para pentagono ");
}
var centimetros = cm.question("digite os centimetros de um dos lados? ")
var area = ""

if (lados_poligono == 3){ 
    var area = ((centimetros * centimetros * Math.sqrt(3)) / 4).toFixed(2)
    console.log("Area do triangulo é igual a: " +area)
}

else if (lados_poligono == 4 ) {
    var area = ((centimetros*centimetros) / 2).toFixed(2)
    console.log("Area do quadrado é igual a: " +area)
}

else if (lados_poligono == 5){
    var area = (((centimetros * centimetros * Math.sqrt(3))/4)*5).toFixed(2)
    console.log("Area do pentagono é igual a: " +area)
}
