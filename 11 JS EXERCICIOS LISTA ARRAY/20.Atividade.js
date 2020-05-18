// 20. Faça um algoritmo que pergunta para o usuário se ele quer criptografar ou
// descriptografar.
// Utilize como criptografia a cifra de césar
// Exemplo ->
// Entrada : ARBYTE
// SAIDA: DUEBWH
// Caso o usuario opte por criptografar o algoritmo deve aplicar a cifra de césar e mostrar
// o valor criptografado
// Caso o usuário opte por descriptografar o algoritmo deve fazer a engenharia reversa e
// retorna ao valor antes de criptografia.
// Utilize todo o conhecimento até aqui pra desenvolver este algoritmo

var rs = require("readline-sync");
var pergunta = rs.questionInt("Digite 1 para criptografar ou 2 para descriptografar: ")
var texto = rs.question("Digite a palavra : ").split("")
var alfabetocomum = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "l", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","u","p","q","r","s","t","u","v","w","x","y","z"]
var criptogafaalfabeto = ["D", "E", "F", "G", "H", "I", "J", "K", "l", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C","d","e","f","g","h","i","j","k","l","m","n","o","u","p","q","r","s","t","u","v","w","x","y","z","a","b","c"]
var textocriptogrado = ""
var textodescriptogrado = ""

if(pergunta == 1){
for (var n = 0; n < texto.length; n++) {
    for (var i = 0; i < alfabetocomum.length; i++) {
        if (texto[n] == alfabetocomum[i]) {
            textocriptogrado= textocriptogrado+criptogafaalfabeto[i]
        }
    }
}
console.log(textocriptogrado)
}
else if(pergunta == 2){
    for (var n = 0; n < texto.length; n++) {
        for (var i = 0; i < criptogafaalfabeto.length; i++) {
            if (texto[n] == criptogafaalfabeto[i]) {
                textodescriptogrado= textodescriptogrado+alfabetocomum[i]
            }
        }
    }
    console.log(textodescriptogrado)
}
