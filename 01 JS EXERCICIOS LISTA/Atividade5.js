// var Nm = require("readline-sync")
// var numero1 = Nm.questionInt("Digite um numero?")
// var numero2 = Nm.questionInt("Digite um numero?")
// var numero3 = Nm.questionInt("Digite um numero?")   

// if (numero1 < numero2 & numero2 < numero3){
//     console.log(numero1+"," +numero2+","+numero3)
//     }
// if (numero1 < numero3 & numero3 < numero2){
//     console.log(numero1+","+numero3+","+numero2)
// }    

// else if (numero2 < numero1 & numero1 < numero3){
//     console.log(numero2+"," +numero1+","+numero3)
//     }

// else if (numero2 < numero3 & numero3 < numero1){
//     console.log(numero2+","+numero3+","+numero1)
//     }
       
// else if (numero3 < numero2 & numero2 < numero1){
//     console.log(numero3+"," +numero2+","+numero1)
//     }
//  else {console.log(numero3+","+numero1+","+numero2)
// // }   

var Nm = require("readline-sync")
var numero1 = Nm.questionInt("Digite um numero?")
var numero2 = Nm.questionInt("Digite um numero?")
var numero3 = Nm.questionInt("Digite um numero?")   

if (numero1 < numero2 && numero2 < numero3){
var maior = numero3;
var meio = numero2;
var menor = numero1;    
}
if (numero1 < numero3 && numero3 < numero2){
    var maior = numero2;
    var meio = numero3;
    var menor = numero1;
}    

else if (numero2 < numero1 && numero1 < numero3){
    var maior = numero3;
    var meio = numero1;
    var menor = numero2;
}

else if (numero2 < numero3 && numero3 < numero1){
    var maior = numero1;
    var meio = numero3;
    var menor = numero2;
    }
       
else if (numero3 < numero2 && numero2 < numero1){
    var maior = numero1;
    var meio  = numero2;
    var menor = numero3;
    }
 else {
 var maior = numero2;
 var meio = numero1;
 var menor = numero3;
}   

console.log(menor+","+meio+","+maior)

