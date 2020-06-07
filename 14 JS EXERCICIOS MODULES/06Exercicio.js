// 6. Escolha um programa que você já fez em atividades passadas e faça o output do
// terminal ficar colorido com o pacote CHALK: https://www.npmjs.com/package/chalk



var rs = require('readline-sync');
var prime = require('prime-number');
var chalk = require('chalk');

var numbers = rs.questionInt('inform a number : ');
var numberPrime = prime(numbers);

var numbersPrime = "Not is Prime"


if ( numberPrime == true){
    numbersPrime="Is Prime"
}

console.log(chalk.blue(`The number ${numbers}, ${numbersPrime}`));
