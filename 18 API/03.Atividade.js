// 3. (OBRIGATORIO) Faça um algoritmo que receba um número de um episódio de
// Breaking Bad.
// Após isso o algoritmo deve imprimir o elenco de personagens e também de qual
// temporada é este episódio.
// Caso o episódio seja inválido dizer ao usuário que não existe este episódio.
// Utilize a api : https://www.breakingbadapi.com/api/episodes/ {NUMERO_DO_EPISODIO}
// Exemplo episodio 10 : https://www.breakingbadapi.com/api/episodes/10

let rs = require('readline-sync');
let axios = require('axios');

let numeroEpisodio = rs.questionInt('Informe o numero de um espisodio: ')

axios.get(`https://www.breakingbadapi.com/api/episodes/${numeroEpisodio}`)
.then( imprimeElenco = ( response ) => {if( numeroEpisodio > response.length){
    console.log('Numero de episodio invalido')
}
else{ console.log(response.data[0].characters)}
})