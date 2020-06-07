// 3. Criar um módulo que calcule a média de uma coleção de números.
// 3.1 Para isso crie um arquivo chamado calcula-media.js.
// 3.2 No módulo exporte uma função media(arr) que recebe como argumento um array de
// números.
// 3.3 A função deve iterar por esses números e retornar sua média.
// 3.4 Após isso no arquivo da atividade importe o módulo criado e solicite ao usuário 3
// números, utilize o módulo criado para calcular a média e no final imprima o resultado
// para o usuário.

let rs = require('readline-sync')
let md = require('./calcula-media')

let numerosDoUsuario = []
let cont = 0

console.log('Insira 3 numeros para calcular a média: ');

while(cont < 3){
let numero =  rs.questionInt(`Insira o ${cont+1} numero: `)
numerosDoUsuario.push(numero)
cont++
}
let calc = md.calculaMedias(numerosDoUsuario)
console.log(calc)
