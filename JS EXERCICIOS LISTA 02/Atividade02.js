// 2. Faça um programa onde o usuário irá escolhe se que Converte graus Celsius
// para Fahrenheit ou Fahrenheit para Celsius.

var gr = require("readline-sync")
var converter = gr.questionInt(" Para converter graus celsius para Fahrenheit digite 1 ou Fahrenheit para Celsius digite 2  ")
var graus = gr.questionInt("Digite valor que você deseja converter  ")  
var form1 = ((graus - 32) * 5/9).toFixed
var form2 = ((graus * 9/5) + 32).toFixed

if (converter == "1"){
    console.log(form1+"graus")
}

else if (converter == "2"){
    console.log(form2+"graus")
}