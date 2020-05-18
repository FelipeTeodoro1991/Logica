//13. Faça um programa que receba uma frase e troque a palavra ANTILOPE por um de seus
// nomes cientificos : Kobus ellipsiprymnus
// Utilize o método replace()


var rs =  require("readline-sync");
var frase = rs.question("Diga uma frase: ");
var palavra =  frase.replace("ANTILOPE","Kobus ellipsiprymnus")

console.log(palavra);
    

