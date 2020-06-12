// 2. Crie um algoritmo que conte quantos carros do Japan (Japão) existem na base
// cars.json
// O campo que define o país no cars.json é Origin
// A comparação da string pode ser utilizada usando a palavra “Japan”
// A resolução é similar ao exercício 1
var fs = require('fs');

var caminhoArquivo = fs.readFileSync('cars.json');
var carsDeserializado = JSON.parse(caminhoArquivo);

var carrosDoJapao = carsDeserializado.filter ((carro) => carro.Origin == 'Japan')

console.log(carrosDoJapao.length);

