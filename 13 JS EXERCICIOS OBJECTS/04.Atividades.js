// 4. Faça um programa que pergunte ao usuário se ele quer adicionar ou apenas exibir,

// caso o usuário escolha adicionar, altere o programa inicial de cadastro de carro para
// que não salve 1 objeto carro e sim uma coleção de carros (utilizando arrays, em vez de
// serializar/deserializar o objeto será o array que possui os carros).
// Após cadastrar o carro o programa deve novamente solicitar o usuário se quer exibir ou
// adicionar, caso o usuário escolha exibir deve ser exibido todos os carros cadastrados.

var rs = require('readline-sync');
var fs = require('fs');
var garagem = [];
var novoCadastro = true

function criarCarro(rs) {
    var cor = rs.question('Informe a cor do carro: ')  // Coleta a informação com o usuario e guarda  cor na variavel 
    var modelo = rs.question('Informe o modelo do carro: ') // Coleta a informação com o usuario e guarda  cor na variavel
    var marca = rs.question('Informe a marca do carro: ') // Coleta a informação com o usuario e guarda  cor na variavel
    var carro = {} //cria objeto carro 
    carro.cor = cor //istancia cor como propriedade do carro
    carro.modelo = modelo //istancia modelo como propriedade do carro
    carro.marca = marca //istancia marca como propriedade do carro
    return carro

}

while(novoCadastro == true) {
    novoCadastro = rs.keyInYN('Confirme para cadasrar um novo veiculo ou não para imprimir: ');
    if (novoCadastro == true) {
        var carroNovo = criarCarro(rs);
       garagem.push(carroNovo);
    }   
}
console.log(garagem);

var caminhoDoArquivo = 'carro.json';
var arquivoSerializado = JSON.stringify(garagem);
fs.writeFileSync(caminhoDoArquivo,arquivoSerializado);
