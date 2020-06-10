// 1. Criar um algoritmo que receba 2 carros e verifique se os carros são iguais
// Para isso :
// 1.1 - Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
// inicialize as propriedades com estes valores.
// 1.2 - Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
// cor.
// 1.3 - Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
// e cor.
// 1.4 Ao final o algoritmo deve comparar se os carro são iguais.
// Um carro vai ser igual ao outros se modelo e marca possuem o mesmo valor.

var rs = require('readline-sync');

class Carro {
    constructor(marca, modelo, cor){
        this.marca = marca 
        this.modelo = modelo
        this.cor = cor
    }
}

console.log('Cadastre o primeiro carro: ');
var marca1 = rs.question('Digite o marca do carro: ')
var modelo1 = rs.question('Digite o modelo do carro: ')
var cor1 = rs.question('Digite o cor do carro: ')
var carro1 = new Car(marca1, modelo1, cor1)

console.log('Cadastre o segundo carro: ');
var marca2 = rs.question('Digite o marca do carro: ')
var modelo2 = rs.question('Digite o modelo do carro: ')
var cor2 = rs.question('Digite o cor do carro: ')
var carro2 = new Carro(marca2, modelo2, cor2)

// var comparaCarros = 'Os carros são diferentes!'

// if(carro1 == carro2){
//     var comparaCarros = 'Os carros são iguais'
// }

// console.log(comparaCarros)

function saoIguais(car1,car2){
    if(car1.modelo == car2.modelo && car1.marca == car2.marca){
    return true
}
return false
}

if( saoIguais(carro1,carro2)){
   console.log('Os carros são iguais')
}
else{
    console.log('Os carros são diferentes ');
    
}