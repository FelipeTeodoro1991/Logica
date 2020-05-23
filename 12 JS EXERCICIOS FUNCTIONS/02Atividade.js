// 2. Faça uma função que recebe por parâmetro um valor inteiro e positivo e retorna o valor
// lógico Verdadeiro caso o valor seja primo e Falso em caso contrário.
// Solicite ao usuário o número e no final imprima se é primo ou não utilizando a função na
// condição IF.

var rs = require("readline-sync"); //Solicita a biblioteca readline-sync para pegar o question
var NumberInt = rs.questionInt("Informe um numero: "); // Faz a pergunta e captura a resposta na variavel NumeberInt

function NumeroPrimo(NumberInt) { // Cria função que retorna se o numero é primo ou não
   var ehPrimo = true //Parte da ideia que todo numero é primo 
    for (var i = 2; i < NumberInt; i++) { //faz um lup 
        if (NumberInt % i == 0) { //calcula se o resultado da divisão resta zero 
        ehPrimo = false //Se o resto de algum divisor for igual a 0 varialvel ehPrimo passa a ser false 
       
        }
        return ehPrimo //retorna se o numero inserido é primo "true" não é primo "false"
   }
}
console.log(NumeroPrimo(NumberInt)) //imprime numero primo é true ou false 