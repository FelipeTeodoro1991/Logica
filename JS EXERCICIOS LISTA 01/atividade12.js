// 12. Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo
// seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos).

var dd = require("readline-sync")
var nome = dd.question("Qual o seu nome? ")
var sexo = dd.question("Qual o seu sexo: Digite 'F' para Feminino ou 'M' para masculino ")
var estado_civil = dd.question("Qual seu estado cívil? Digite 'C' para casado(a) 'S' para Solteiro(o) 'V' para Viuvo(a) ou 'D' para Divorciado(a) ")

if (sexo == "F" || "f" && estado_civil == "C" || "c" ){
var tempo_de_casado = dd.question("A quanto tempo esta casa? ")
}
