// 1. Faça um algoritmo que receba uma entrada do usuário e caso encontre a letra a
// transforme ela em maiúscula
// EX: abelha
// O algoritmo imprime
// AbelhA
// Dicas para esta atividade.
// Para selecionar 1 caracter da string utilizamos a função charAt :
// var nome = “oi”
// console.log(nome.charAt(0))
// console.log(nome.charAt(1))
// O algoritmo imprime:
// > o
// > i
// O número que colocamos dentro de charAt é a posição do caractere que queremos da
// string, porém o primeiro elemento é 0 e não 1.
// Sendo assim uma string de 2 elementos possui o elemento 0 e 1.
// Para cada charAt você deve concatenar isto numa string separada e exibir ela no final

// var rs = require("readline-sync")
// var texto = rs.question("pergunta: ")
// var pergunta = texto.length
// var palavra = texto.search("a")


// for(var i = 0; i < pergunta; i++){
//     if (pergunta[i].charAt() = "a"){
//         console.log("Deu certo")
//     }

// }

// var rs = require('readline-sync');
// var option = '';
// var option = rs .question("Qual a palavra?");
// var palavra = option.split('');
// for (let i = 0; i < option.length; i++){
//     if(option[i] === "a"){
//         palavra[i] = option.charAt(i).toUpperCase();
//     }
// }
// console.log(palavra.join(''));


var lt = require("readline-sync")
var texto =  lt.question("Diga alguma coisa: ")
var option = texto.length


for(var i = 0; i < option; i++ ){
  var option2 = texto[i].replace("a","A")
      console.log(option2)
}







