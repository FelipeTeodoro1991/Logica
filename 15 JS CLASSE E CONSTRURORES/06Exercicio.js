// 6. Faça um programa que crie um carro solicitando modelo e cor, após isso o usuário vai ser
// solicitado 3 opções
let rs = require('readline-sync');
let car = require('./carro');
let carro = car.Carro
// cadastraCarro(rs)
let carro1 = new carro()
carro1.marca = rs.question('Digite o modelo do veiculo: ')
carro1.modelo = rs.question('Digite a cor do veiculo: ')
carro1.velocidade = 0

let cars = false

numero = 0 
d = car.acelerar(numero,10)

car.acelerar(numero)
car.acelerar(numero)
car.acelerar(numero)
car.acelerar(numero)
car.acelerar(numero)


console.log(d);


while(true){
    car.acelerar(carro1.acelerar,10)
    car.acelerar(carro1.acelerar,10)
    car.acelerar(carro1.acelerar,10)
    break
}
console.log(carro1.velocidade);



// while(cars == false){
//     let opcoes = rs.question('digite "A" para acelerar "F" para frear e "D" para desligar: ').toUpperCase()
//     if(opcoes == "A"){
//        car.acelerar()
//     }
//     if(opcoes == "F"){
//        frear(carro1.velocidade)
//     }
//     if(opcoes == "D"){
//        desligar(carro1.velocidade)
//     }
//     console.log(`Sua velocidade atual é de ${carro1.velocidade}km`);
// }
    


// // a. Acelerar
// // i. O algoritmo deve chamar a função Acelerar do módulo Carro
// // ii. Após isso imprimir a velocidade atual

// // b. Freiar
// // i. O algoritmo deve chamar a função Frear do módulo Carro
// // ii. Após isso imprimir a velocidade atual

// // c. Desligar
// // i. Caso o usuário Escolha Desligar o algoritmo deve chamar a função
// // Desligar do módulo Carro
// // ii. Caso a função responda true o programa fecha
// // iii. Caso a função responda false o programa diz que não é possível desligar
// // um carro em movimento.

// // Caso o usuário escolha uma opção que não existe o algoritmo simplesmente diz que
// // não entendeu e solicita de novo as 3 opções.

// // Caso o usuário escolha uma opção válida o programa após imprimir o valor da
// // velocidade deve novamente repetir a escolha das 3 opções para o usuário.

// // Para isso no módulo Carro (carro.js que criamos na atividade 5) no construtor adicione
// // uma propriedade no objeto chamada velocidade e inicie o valor dela com 0
// // Adicione também 3 funções









// function cadastraModelo(rs){
// let modelo = rs.question('Digite o modelo do veiculo: ')
// return modelo
// }
// function cadastraCor(rs){
//     let cor = rs.question('Digite a cor do veiculo: ')
// return cor
// }

// console.log('Responda as perguntas para cadastrar o carro: ')
// let carro1 = new carro("",cadastraModelo(rs),cadastraCor(rs),0)
// console.log(carro1);

// let car1 = new Carro(cadastraCarro(rs))
// let car = false
// let velocidade = vl.velocidades()

// function cadastraCarro(rs){
// console.log('Responda as perguntas para cadastrar o carro: ')
// let modelo = 
// let cor = 
// return modelo && cor
// }
// console.log(carro1);