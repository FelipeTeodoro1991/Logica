var ano_atual = new Date().getFullYear();
var mes_atual = new Date().getMonth()+1;
var dia_atual = new Date().setDate();
var datanascimento = require("readline-sync")
var data_aniversario = datanascimento.question("Qual a sua data de nascimento?")
var ano_Nasc = data_aniversario.split('/')[2];
var mes_Nasc = data_aniversario.split('/')[1];
var dia_Nasc = data_aniversario.split('/')[0];
var idade = ano_atual-ano_Nasc;

if (mes_atual < mes_Nasc){
var res_idade = idade -1
}
    if (mes_atual > mes_Nasc){
    var res_idade = idade
}
        if(mes_Nasc==mes_atual){
            if(dia_atual < diaNasc )
             var res_idade = idade -1
        }
         
var data_aniversario =new Date(ano_Nasc, mes_Nasc, ano_Nasc)

console.log("Você tem " +res_idade+"anos de idade")

if (res_idade < 16) {
    console.log("E por isto, ainda não pode votar")
}

else if (res_idade < 18) {
    console.log(" E por isto, o seu voto é opcional.")
}
else if (res_idade < 65) { 
    console.log(" E por isto, o seu voto é obrigatório")
}

else {
    console.log("E por isto, o seu voto é opcional")
}



