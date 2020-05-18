// 15. Faça um algoritmo que receba uma palavra, após isso ele remove todas as vogais
// dessa palavra e imprime a palavra novamente porém sem as vogais.
// EX: Entrada banana
// O algoritmo imprime :
// Bnn
// Utilize o método split() para quebrar a string e depois montar ela sem vogais.
var rs = require("readline-sync");
var solicitapalavra = rs.question("Informe uma palavra: ").toLocaleUpperCase(); 
var palavra = solicitapalavra.split("")
var vogais = ["A","E","I","O","U"]
var imprimiconsoante = ""

for(var i = 0; i < palavra.length;i++ ){
    if(palavra[i] != vogais[0] && palavra[i] != vogais[1] && palavra[i] != vogais[2] && palavra[i] != vogais[3] && palavra[i] != vogais[4] ){
        imprimiconsoante = imprimiconsoante+palavra[i]
    }
}


console.log(imprimiconsoante)
