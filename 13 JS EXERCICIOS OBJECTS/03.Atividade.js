// 3. Faça um programa que lê o arquivo carro.json utilizando a biblioteca e ‘fs’ para ler o
// arquivo e após isso utilize o método JSON.parse para deserializar o objeto em string.
// Após isso imprima os valores lidos do json do arquivo.
// OBS: altere o arquivo salve e rode o programa novamente e veja os dados sendo
// mudados a cada execução

var fs = require('fs');
var rs = require('readline-sync'); // faz a requisição da biblioteca

var caminhoDoArquivo = 'carro.json';
var arquivoSerializado = fs.readFileSync(caminhoDoArquivo);
var arquivoDeserializado =[];
arquivoDeserializado.push(JSON.parse(arquivoSerializado));

console.log(arquivoDeserializado);


var cor = rs.question('Informe a cor do carro: ')  // Coleta a informação com o usuario e guarda  cor na variavel 
var modelo = rs.question('Informe o modelo do carro: ') // Coleta a informação com o usuario e guarda  cor na variavel
var marca = rs.question('Informe a marca do carro: ') // Coleta a informação com o usuario e guarda  cor na variavel

var carro = {} //cria objeto carro 
carro.cor = cor //istancia cor como propriedade do carro
carro.modelo = modelo //istancia modelo como propriedade do carro
carro.marca = marca //istancia marca como propriedade do carro  

var objetoSerializado = JSON.stringify(carro) // serializa o arquivo
fs.writeFileSync(caminhoDoArquivo,objetoSerializado)// parametro 1 informa a pasta destino, parametro 2 informa o arquivo a ser enviado

