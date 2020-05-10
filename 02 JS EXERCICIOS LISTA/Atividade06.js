// 6. Elabore um algoritmo que calcule o que deve ser pago por um produto,
// solicitando o preço da etiqueta do produto e a escolha da condição de
// pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de
// pagamento escolhida e efetuar o cálculo adequado. Código Condição de
// pagamento
// - 1 À vista em dinheiro ou cheque, recebe 10% de desconto
// - 2 À vista no cartão de crédito, recebe 15% de desconto
// - 3 Em duas vezes, preço normal de etiqueta sem juros
// - 4 Em duas vezes, preço normal de etiqueta mais juros de 10%

var rs = require("readline-sync");
var Valor_Produto = rs.questionInt("Qual o valor na etiqueta do produto: ");
var condicao_de_pagamento = rs.question("Qual a forma de pagamento? \n\
1- A vista em dinhero ou cheque\n\
2- A vista no cartão de crédito\n\
3- Em duas vezes\n\
4- Mais de duas vezes\n\
Digiteo numero da forma de pagamento:  ");


if (condicao_de_pagamento == 1){
    var Valor_Produto =  ((Valor_Produto*90)/100).toFixed(2);
    console.log(`Você terá 10% de desconto o valor a ser pago é R$:${Valor_Produto}` )
}
else if (condicao_de_pagamento == 2){
    var Valor_Produto =  ((Valor_Produto*85)/100).toFixed(2);
    console.log(`Você terá 10% de desconto o valor a ser pago é R$:${Valor_Produto}` )
}
else if (condicao_de_pagamento == 3){
    console.log(`O valor a ser pago é R$:${Valor_Produto}` )
}
else if (condicao_de_pagamento == 4){
    var Valor_Produto =  ((Valor_Produto*110)/100).toFixed(2)
    console.log(`Você terá 10% de juros o valor a ser pago é R$:${Valor_Produto}` )
}