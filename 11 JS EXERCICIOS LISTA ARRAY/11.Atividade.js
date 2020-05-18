// 11. Faça um programa que receba uma palavra e verifica se a palavra está cometendo o
// seguinte erro de português
// Antes de “p” ou “b” devemos usar M
// Caso a palavra esteja errada informar o erro
// Se não dizer que a palavra está certa.
// Utilize o método includes()

var rs =  require("readline-sync");
var solicitapalavra = rs.question("Informe uma palavra: ");
var palavra = solicitapalavra;
var incluinp = palavra.includes("np");
var incluinb = palavra.includes("nb");

if(incluinb || incluinp == true ){
    console.log("Antes de “p” ou “b” devemos usar M");
}
else{console.log("A palavra está certa")

}


