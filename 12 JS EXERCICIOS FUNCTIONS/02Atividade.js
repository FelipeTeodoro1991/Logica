// 2. Faça uma função que recebe por parâmetro um valor inteiro e positivo e retorna o valor
// lógico Verdadeiro caso o valor seja primo e Falso em caso contrário.
// Solicite ao usuário o número e no final imprima se é primo ou não utilizando a função na
// condição IF.

var rs = require("readline-sync");
var NumberInt = rs.questionInt("Informe um numero: ");

function NumeroPrimo(NumberInt) {
   var ehPrimo = true
    for (var i = 2; i < NumberInt; i++) {
        if (NumberInt % i == 0) {
        ehPrimo = false
       
        }
        return ehPrimo
   }
}
console.log(NumeroPrimo(NumberInt))