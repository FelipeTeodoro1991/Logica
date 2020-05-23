// 1. Crie um programa que receba 3 entrada do usuário. A cor, o modelo e a marca, crie um
// objeto Carro e atribua as entradas do usuário neste objeto.
// No final o programa deve imprimir as informações do carro.
// Utilize a criação de objetos para resolver este problema
var rs = require('readline-sync'); // faz a requisição da biblioteca
var cor = rs.question('Informe a cor do carro: ')  // Coleta a informação com o usuario e guarda  cor na variavel 
var modelo = rs.question('Informe o modelo do carro: ') // Coleta a informação com o usuario e guarda  cor na variavel
var marca = rs.question('Informe a marca do carro: ') // Coleta a informação com o usuario e guarda  cor na variavel

var carro = {} //cria objeto carro 
carro.cor = cor //istancia cor como propriedade do carro
carro.modelo = modelo //istancia modelo como propriedade do carro
carro.marca = marca //istancia marca como propriedade do carro


console.log(carro)