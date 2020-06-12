// 6. Faça um algoritmo que diga qual é o carro menos potente da lista cars.json.
// Utilize o campo Horsepower para descobrir qual é o menos potente

let fs= require("fs")
let caminhoDoArquivo = "cars.json"
let arquivoDesserializado = fs.readFileSync(caminhoDoArquivo)
let carros = JSON.parse(arquivoDesserializado)

let carrosOrdenados = carros.sort( (a, b) => (b.Horsepower - a.Horsepower))
let carroMenosPortente = carrosOrdenados[carrosOrdenados.length-1]

console.log(carroMenosPortente)

