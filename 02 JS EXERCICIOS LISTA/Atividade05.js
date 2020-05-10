// 5. Faça um programa que calcule e imprima o valor em reais de cada kw Dado: 100 kilowatts custa 1/7 de 1.045, 
//o valor em reais a ser pago 
//o novo valor a ser pago por essa residência com um desconto de 10%.
// quantidade
// de kw gasto por residência.

var rs = require("readline-sync");

var Consumo_KW = rs.questionInt("Qual foi o consumo de KW da sua residencia: ");

var valor_cada_kw = ((1045 / 7) /100).toFixed(4);

var valor_a_ser_Pago = (Consumo_KW * valor_cada_kw).toFixed(2)

var valor_com_desconto = ((valor_a_ser_Pago * 90 ) / 100).toFixed(2)

console.log(`O valor de 1 KW é R$: ${valor_cada_kw}`)

console.log(`O valor a ser pago é de R$:${valor_a_ser_Pago} `)

console.log(`O valor a ser pago com desconto é de R$:${valor_com_desconto}`)