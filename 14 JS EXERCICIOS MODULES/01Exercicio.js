// 1. Faça uma programa que receba 4 notas e calcule a média e apresente ao usuário a
// média no final.
// Utilize o pacote : https://www.npmjs.com/package/median

var median = require('median')
var rs = require('readline-sync')

var notas = []

console.log(" Digita as notas: ")

for( var i = 0; i < 4; i++){
    var nota = rs.question('> ')
}

var mediacalculada = median(notas)
