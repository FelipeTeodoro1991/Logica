// 5. Fazer um programa que calcule e imprima o fatorial de um número fornecido pelo usuário,
// usando o comando For.. Perguntar ao usuário se ele deseja calcular o fatorial de
// outro número e repetir a execução do programa tantas vezes quantas o usuário indicar.
// Exemplo de tela de saída:

var rs = require("readline-sync");
var PedeNumero = rs.questionInt("Diga um numero para calcular o seu fatorial ");
var NumFatorial = 1

for (var i = 1; i <= PedeNumero; i++)
{
    NumFatorial = i*NumFatorial
} 

console.log(`O resultado do numero fatorial é: ${NumFatorial}`);
