// 4. Faça um algoritmo que receba um número e diga se ele é primo ou não
// Utilize o pacote : https://www.npmjs.com/package/prime-number


var rs = require('readline-sync');
var prime = require('prime-number');

var numbers = rs.questionInt('inform a number : ');
var numberPrime = prime(numbers);

var numbersPrime = "Not is Prime"


if ( numberPrime == true){
    numbersPrime="Is Prime"
}

console.log(`The number ${numbers}, ${numbersPrime}`);
