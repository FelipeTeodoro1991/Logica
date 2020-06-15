// 4. (OBRIGATÓRIO) Faça um algoritmo que receba uma CEP e diga qual é o endereço
// completo (Cidade, rua, estado) deste CEP.
// Utilize a API : https://api.postmon.com.br/v1/cep/ {CEP}
// Exemplo CEP : https://api.postmon.com.br/v1/cep/89010020

let rs = require ('readline-sync');
let axios = require('axios');

let pedeCep = rs.question('Digite o CEP que deseja consultar o endereco (somente numeros): ');

axios.get(`https://api.postmon.com.br/v1/cep/${pedeCep}`)
.then( imprimeEndereco = (response) => {
    let rua = response.data.logradouro
    let cidade = response.data.cidade
    let estado = response.data.estado
    console.log(`Rua: ${rua}, Cidade: ${cidade}, Estado: ${estado}`)
})