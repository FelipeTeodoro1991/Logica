// 4. Faça um algoritmo que calcule a média de potência dos carros da Europe (Europa)
// Similar a atividade 2 porém usaremos o campo Origin para selecionar os carros da
// europa e depois disso aplicar a média em cima do campo Horsepower.

let fs = require('fs')

let caminhoDoArquivo = fs.readFileSync('./cars.json')
let carroDesserializado = JSON.parse(caminhoDoArquivo)

let carrosDaEuropa = carroDesserializado.filter( (carro) => carro.Origin == "Europe")
let velocidade = 0
let quantidadeDeCarros = carrosDaEuropa.length
for(let i = 0; i < carrosDaEuropa.length; i++){
    let velocidades = carrosDaEuropa[i].Horsepower
    velocidade = velocidade + velocidades
}
let mediaDasVelocidades = velocidade/quantidadeDeCarros

console.log(mediaDasVelocidades);





// for(let i = 0; i < quantidadeDeCarros; i++){
//     velocidade = velocidade + carrosDaEuropa.Horsepower
// }
// let mediaVelocidades = velocidade/quantidadeDeCarros 

// console.log(velocidade);


