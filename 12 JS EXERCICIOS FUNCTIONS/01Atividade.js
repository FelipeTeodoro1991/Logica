// 1. Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu
// volume (v = 4/3.pi.R 3 ).
// Então solicite ao usuário o raio e a esfera e utilize a função para exibir o resultado.
var rs = require("readline-sync");
var numero = rs.questionInt("Informe um numero: ");

function calculaVolume (n) {//Criando função que recebe numero como parametro
    var volume = (4*Math.PI*n**3)/3 //Declara o que a função deve fazer 
    return volume    //retorna o resultado da função 
}

console.log(calculaVolume(numero)) // imprime o retorno da função 
