// 1. Faça um programa que leia o valor de um produto X e leia a quantidade de reais
// de um cofrinho que contenha:
// a. N moedas de 1 real;
// b. N moedas de 50 centavos;
// c. N moedas de 25 centavos;
// d. N moedas de 10 centavos;
// // e. N moedas de 5 centavos;
// // f. N moedas de 1 centavos.
// // O programa deverá verificar se o total de reais que contém no cofrinho é o
// // bastante para compra o produto X e imprimir se possui ou não valor suficiente

var pd = require("readline-sync")
var produto = pd.questionInt("Qua o valor do produto 'X'? ")
var Um_real = pd.questionInt("Quantas moedas de 1 tem no cofre? ")
var Cinquenta_cents = pd.questionInt("Quantas moedas de 50 centavos? ")
var vinte_e_cinco_cents = pd.questionInt("Quantas moedas de 25 centavos? ")
var dez_cents = pd.questionInt("Quantas moedas de 10 centavos? ")
var cinco_cents = pd.questionInt("Quantas moedas de 5 centavos? ")
var um_cents = pd.questionInt("Quantas moedas de 0,01 centavos? ")

var cofre = ((1.*Um_real)+(0.50*Cinquenta_cents)+(0.25*vinte_e_cinco_cents)+(0.10*dez_cents)+(0.05*cinco_cents)+(0.01*um_cents)).toFixed(2)

var saldo_compra = cofre -produto

if (saldo_compra <= 0 ){
    console.log("o saldo no cofrinho é de R$" +cofre+ " é o bastante para compra o produto")
}

else{ console.log("o saldo no cofrinho é de R$" +cofre+ "é o bastante para compra o produto")
}

