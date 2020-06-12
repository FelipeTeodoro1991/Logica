// 5. Faça um algoritmo que diga qual é o carro mais potente da lista cars.json.
// Utilize o campo Horsepower para descobrir qual é o mais potente

let fs = require('fs');
let caminhoDoArquivo = fs.readFileSync('cars.json');
let carroDesserializado = JSON.parse(caminhoDoArquivo);

carrosOrdenados = carroDesserializado.sort( (a, b)  => (b.Horsepower - a.Horsepower))


console.log(carrosOrdenados[0])