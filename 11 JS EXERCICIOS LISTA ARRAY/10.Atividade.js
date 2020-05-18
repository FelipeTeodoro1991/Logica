// 10. Faça um programa que receba uma palavra e verifica se ela termina com “al” se termina
// com “al” então imprime a palavra se não imprime “palavra não identificada”.
// Utilize o método endsWith()


var rs =  require("readline-sync");
var palavra = rs.question("Informe uma palavra que termino com al: ");

var al = palavra.endsWith("al");

if( al == true){
    console.log(palavra);
}
else{ console.log("palavra não identificada");
}
