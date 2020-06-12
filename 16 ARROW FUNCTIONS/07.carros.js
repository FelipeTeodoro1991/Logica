// 7. Faça um algoritmo que solicite ao usuário A ou B
// Caso o usuário escolha A
// O algoritmo deve imprimir toda informação do carro com maior aceleração
// Caso o usuário escolha B
// O algoritmo deve imprimir toda informação do carro com maior potência
// Se houver mais de um carro imprimir todos 1 por 1

let fs = require('fs');
let rs = require('readline-sync');

let caminhoDoArquivo = fs.readFileSync('./cars.json');
let arquivoDesserializado = JSON.parse(caminhoDoArquivo);
let pergunta = rs.question(' Insira "A" para imprimir carro com maior aceleração ou "B" para carro com maior potencia: ').toUpperCase();

while (pergunta != 'A' && pergunta != 'B') {
    pergunta = rs.question(' Insira "A" para imprimir carro com maior aceleração ou "B" para carro com maior potencia: ').toUpperCase();

}

if (pergunta == 'A') {
    let carrosOrdenados = arquivoDesserializado.sort((a, b) => (a.Acceleration - b.Acceleration))
    let maiorAcceleration = carrosOrdenados[0].Acceleration
    carrosOrdenados.forEach((carro) => { if (carro.Acceleration == maiorAcceleration) console.log(carro) })
}
if (pergunta == 'B') {

    let carrosOrdenados = arquivoDesserializado.sort((a, b) => (b.Horsepower - a.Horsepower))
    let maiorPotencia = carrosOrdenados[0].Horsepower
    carrosOrdenados.forEach((carro) => {if (carro.Horsepower == maiorPotencia) console.log(carro)})

}
