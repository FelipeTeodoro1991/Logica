// 4. Ler o nome de um aluno e suas duas notas A e B, 
//e após calcular a média ponderada
// entre
// estas notas (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este
// procedimento para uma turma composta por cinco alunos, usando o comando For.
// Exemplo de tela de saída:
// Entre com o nome do aluno: João da Silva
// Entre com o grau A: 5.0
// Entre com o grau B: 6.0
// O aluno João da Silva tem uma média:5.7

var rs = require("readline-sync");
// var nome_aluno = rs.question("Entre com o nome do aluno: ");
// var nota1 = rs.questionInt("Entre com a nota A: ");
// var nota2 = rs.questionInt("Entre com a nota B: ")

for(var i = 0; i < 5; i++){ 
var nome_aluno = rs.question("Entre com o nome do aluno: ");
var nota1 = rs.questionInt("Entre com a nota A: ");
var nota2 = rs.questionInt("Entre com a nota B: ");
var resultado = ((nota1*30)/100)+((nota2*70)/100);
console.log( `O aluno ${nome_aluno} tem uma média:${resultado}`)
}