// 8. Faça uma função que receba um número e retorne se é perfeito ou não.
// Após isso solicite ao usuário para inserir um número e imprimir se é perfeito ou não
// utilizando a função e imprimindo o resultado no final.
// OBS: Um número perfeito é aquele que a soma do seus divisores (auto excluindo) é
// igual a ele mesmo
// Exemplo 6 possui os seguintes divisores
// 1 + 2 + 3 = 6

//a=5
//b=6

function numeroPerfeito(a) {
    var soma = 0
    for (i = 0; i < a; i++) {
        if (a % i == 0) {
            soma = soma + i
        }
    }
    if (soma == a) {
        return true
    }
    else {
        return false
    }
}
var rs = require("readline-sync");
var n1 = rs.questionInt("Informe o numero para calcular: ")

console.log(numeroPerfeito(n1))

