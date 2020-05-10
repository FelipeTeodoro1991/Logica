// 12. Fazer um algoritmo que recebe 15 números de entrada e calcule a média dos
// números fornecidos.

var rs = require("readline-sync");
var soma = 0;
var cont = 0;

while(cont < 15){
    var numero = rs.questionInt(`Informe o ${cont+1}º numero: `)
    var soma = soma + numero
    cont++
}
console.log(`A média da soma dos valores informados é: ${soma/cont}`)