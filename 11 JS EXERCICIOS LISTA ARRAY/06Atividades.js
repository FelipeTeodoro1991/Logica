// 6. Peça ao usuário para digitar dez valores numéricos e ordene por ordem crescente
// esses valores, guardando-os num vetor e depois exibindo para o usuário.Para esta
// atividade tente usar o algoritmo Bubble Sort (Método da bolha), pesquise sobre ele na
// internet.
// Vídeo bem detalhado do assunto: https://www.youtube.com/watch?v=ZYO43bi0IXY
// Video ilustrativo : https://www.youtube.com/watch?v=lyZQPjUT5B4
var rs = require("readline-sync")
var numeros = []
var aux = 0

console.log("Digite 10 numeros: ");

for (a = 0; a < 10; a++) {
       var digitanumeros = rs.questionInt(`Informe o numero${a + 1}: `)
       numeros.push(digitanumeros)
}
console.log(`Os numeros digitados foram ${numeros}`);

for(i = 0; i < numeros.length; i++){

       for(n = numeros.length-1; n >=0; n-- ){
              
              if(numeros[n] < numeros[n-1]){
                     aux = numeros[n];
                     numeros[n] = numeros[n-1];
                     numeros[n-1] = aux;
              }
       }
}

console.log(numeros)

console.log(`Os numeros digitados foram ${numeros}`)