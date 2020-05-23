// 2. Adicione no programa anterior após a impressão dos dados que ele salve o objeto carro
// em formato JSON.
// Utilize o JSON.stringify para transformar o objeto em string e após isso utilize os
// métodos da biblioteca ‘fs’ para salvar o arquivo.
// Salve o json como ‘carro.json’
var fs = require('fs')
var rs = require('readline-sync'); // faz a requisição da biblioteca
var cor = rs.question('Informe a cor do carro: ')  // Coleta a informação com o usuario e guarda  cor na variavel 
var modelo = rs.question('Informe o modelo do carro: ') // Coleta a informação com o usuario e guarda  cor na variavel
var marca = rs.question('Informe a marca do carro: ') // Coleta a informação com o usuario e guarda  cor na variavel

var carro = {} //cria objeto carro 
carro.cor = cor //istancia cor como propriedade do carro
carro.modelo = modelo //istancia modelo como propriedade do carro
carro.marca = marca //istancia marca como propriedade do carro  

var arquivoCarro = 'carro.json'
var objetoSerializado = JSON.stringify(carro)

fs.writeFileSync(arquivoCarro,objetoSerializado)
