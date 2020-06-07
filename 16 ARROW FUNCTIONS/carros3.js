// 3. Crie um algoritmo que conte quantos carros da Ford existem no cars.json.
// A resolução é similar ao exercício 1, porém utilize o método “includes” com parâmetros
// “Ford” na propriedade Car para realizar a contagem.
var fs = require('fs');

var caminhoDoArquivo = fs.readFileSync('cars.json');
var carsDeserializado = JSON.parse(caminhoDoArquivo);

// var carrosDaFord = carsDeserializado () => carrosDaFord.includes('Chevrolet')

// console.log(carrosDaFord)