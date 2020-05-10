// 7. Faça um programa que pergunte ao usuário escolher duas opções A e B.
// A encerra o programa, B é pra fazer uma soma.
// a. Se o usuário inserir A o programa fecha
// b. Se o usuário inserir B o programa vai realizar uma operação de soma,
// solicitando dois números inteiros (n1 e n2) onde após o usuário inserir o
// segundo número o algoritmo deve apresentar a soma e também pergunta se
// quer realizar outro cálculo.

// c. Se o usuário inserir qualquer coisa diferente de A ou B o programa deve dizer
// que não entendeu o comando e solicitar novamente para inserir A ou B

var rs = require("readline-sync");
var Opcao = rs.question("digite a lete 'A' para encerrar o programa ou 'B' é pra fazer uma soma.");

while(Opcao != "A" && Opcao !="B" && Opcao !="a" && Opcao !="b"){
    console.log("O comando informado é invalido, por gentileza ");
        var Opcao = rs.question("digite a lete 'A' para encerrar o programa ou 'B' é pra fazer uma soma.");
}
while(true){
if(Opcao =="B" || Opcao== "b"){
   
    var n1 = rs.questionInt("digite o primeiro numero: ");
    var n2 = rs.questionInt("digite o segundo numero: ");
    var resultado = n1 + n2
    console.log(`O resultado de ${n1}+${n2} soma é ${resultado}`)
    var Opcao2 = rs.question(" Digite 1 para realizar outro calculo ou qualquer outra tecla para sair ");
    if(Opcao2 != 1){
        break
    }
    }
    else {
        break
    }
}

    
//     if (Opcao2 == 2){
//         break
//     }


// if (Opcao == "A"){
// break}
// else{
// console.log("a")
//     break
// }
// else if(Opcao =="B"){
//     // while(true){
//     var n1 = rs.questionInt("digite o primeiro numero: ");
//     var n1 = rs.questionInt("digite o segundo numero: ");
// }
//     // console.log(`O resultado da soma é ${n1}+${n2}`)}
// //     var Opcao2 = rs.question("Deseja realizar outro caulculo, se Sim digite 1 se não digite 2");
// //     if (Opcao2 == 2){
// //         break
// //     }
// // }
// // }