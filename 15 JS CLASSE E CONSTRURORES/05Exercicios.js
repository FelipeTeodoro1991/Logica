var car = require('./carro')
var rs = require('readline-sync')
var carro = car.Carro


console.log('Cadastre o primeiro carro: ');
var marca1 = rs.question('Digite o marca do carro: ')
var modelo1 = rs.question('Digite o modelo do carro: ')
var cor1 = rs.question('Digite o cor do carro: ')
var carro1 = new carro(marca1, modelo1, cor1)

console.log('Cadastre o segundo carro: ');
var marca2 = rs.question('Digite o marca do carro: ')
var modelo2 = rs.question('Digite o modelo do carro: ')
var cor2 = rs.question('Digite o cor do carro: ')
var carro2 = new carro(marca2, modelo2, cor2)

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
