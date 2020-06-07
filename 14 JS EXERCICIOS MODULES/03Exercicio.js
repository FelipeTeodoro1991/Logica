// 3. Faça um algoritmo que receba um número e diga se ele é par ou ímpar
// Utilize o pacote : https://www.npmjs.com/package/is-odd


var odd = require('is-odd');
var rs = require('readline-sync');

var numero = rs.questionInt('Insira um numero para saber se é par o impar: ');

parOuImpar = odd(numero)
var rNumero = 'Impar'
if (parOuImpar == false ){
    rNumero = 'Par'
}

console.log(`O numero ${numero} é ${rNumero}`)