// 7. Crie um programa que receba uma palavra e exiba quantas consoantes e vogais essa
// palavra tem.
// EX : saúde
// 2 consoantes
// 3 vogais

var rs = require("readline-sync");
var palavra = rs.question("Digite uma pavalavra: ").toUpperCase();
var vogais = "";
for (i = 0; i < palavra.length; i++) {
    if (palavra[i] == "A" || palavra[i] == "E" || palavra[i] == "I" || palavra[i] == "O" || palavra[i] == "U") {
        var vogais = vogais + palavra[i]
    }
}

var numvogais = vogais.length;
var numcoantes = palavra.length - numvogais;

console.log(`O numeor de vogais é ${numvogais}`);
console.log(`Onumero de consoantes é ${numcoantes}`);