// 3. Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna
// essa idade expressa em dias.
// Solicite a data ao usuário e o algoritmo imprime a quantidade de dias como resultado
// utilizando a função criada.

var rs = require("readline-sync");
console.log("***Informe sua idade em anos, dias e meses");
var anos = rs.questionInt("Quantos anos?  ");
var meses = rs.questionInt("Quantos meses?  ");
var dias = rs.questionInt("Quantos dias?  ");


function calculaDiasAPartirDaIdades (a, m, d) {
    var calculaDias = a+(m*30)+(a*30*12);
    return calculaDias
}

console.log(`Você tem ${calculaDiasAPartirDaIdades(anos, meses, dias)} dias de vida`)