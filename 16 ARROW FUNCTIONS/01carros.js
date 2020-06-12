
// 1. Crie um algoritmo que solicite um número para o usuário e diga quantos carros mais
// potente que o valor informado.
// Para isso utiliza a propriedade “Horserpower” do cars.json
// DICA: função filter ou procure como contar quantos objetos tem x valor em uma lista no
// google.

var rs = require('readline-sync');
var fs = require('fs')

var caminhoCarros = fs.readFileSync('cars.json');
var carrosDeserializados = JSON.parse(caminhoCarros);

var potenciaMinima = rs.questionInt('Informe a pontencia minima: ');

var superCarros = carrosDeserializados.filter ( (carro) =>  carro.Horsepower > potenciaMinima )

console.log(superCarros.length);
