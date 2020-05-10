// 4. Uma empresa abriu uma linha de crédito para os funcionários.
// O valor da prestação não pode ultrapassar 30% do salário.
// Faça um programa que receba o salário, o valor do empréstimo e o número de
// prestações e informe se o empréstimo pode ser concedido. Nenhum dos valores
// informados pode ser zero ou negativo.

var cd = require("readline-sync")

var salário = cd.questionInt("Informe o salário ").toFixed(2)
while(salário <= 0){
    var salário = cd.questionInt("O valor da salário informado não e valido por gentileza Informe o salário ").toFixed(2);
}

var emprestimo = cd.questionInt("Informe valor do empréstimo desejado ").toFixed(2)
while(emprestimo <= 0){
    var emprestimo = cd.questionInt("O valor do emprestimo informado não e valido por gentileza Informe o valor do emprestimo desejado ").toFixed(2);
}

var parcelas = cd.questionInt("Informe em quantas parcelas deseja pagar ").toFixed(2)
while(parcelas <= 0){
    var parcelas = cd.questionInt("o valor informado não é valido por gentileza, informe em quantas parcelas deseja pagar ").toFixed(2)
}

var vlr_parcelas = emprestimo/parcelas
var vlr_representado =  (salário/100)*30


if(vlr_parcelas > vlr_representado){
    console.log("O emprestimo não consedido")
}
else {
    console.log("O emprestimo consedido")
}

console.log("valor limite para cada parcela "+vlr_representado+" valor da parcela solicitada "+vlr_parcelas)