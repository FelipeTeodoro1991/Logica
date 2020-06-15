// 2. (OBRIGATORIO) Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e
// também seu autor
// Utilize a API : https://breaking-bad-quotes.herokuapp.com/v1/quotes

let axios = require('axios');

axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
.then(  ImprimiFrase = (response) => { 
    console.log(`A frase ${response.data[0].quote}`);
    console.log(`Foi escrita por ${response.data[0].author}`);
 })