var rs = require("readline-sync");
var campos = []
var cont = 0
var dados = []



while (true) {
    if (cont == 0) {
        var campo = rs.question("Informe o nome do carebalho: ");
        campos.push(campo)
        var cont = rs.questionInt("Para continuar a inserir campos digite zerou ou qualquer outro numero para sair: ")
    }
    else {
        break
    }
}

var cont = 0 
while (true) {
    if (cont == 0) {
        var dado = rs.question("Informe o nome dado do campo: ");
        dados.push(dado)
        var cont = rs.questionInt("Para continuar a inserir campos digite zerou ou qualquer outro numero para sair: ")
    }
    else {
        break
    }
}

if( campos.length != dados.length){
    console.log("Numeros de dados inseridos diferente de numero de campos")
}
else if(campos.length == dados.length){
    for(var i = 0; i < campos.length; i++){
        console.log(`${campos[i]}: ${dados[i]}`)
    }
}


//// 8. Faça um programa que vai receber duas entradas
// A primeira entrada é o cabeçalho (HEADER) ela vai possuir o seguinte formato
// campo1;campo2;campo3;campo4
// Onde se quebrarmos a string por ‘;’ teremos o seguinte array
// [0] campo1
// [1] campo2
// [2] campo3
// [3] campo4
// A quantidade de campos depende da quantidade de ‘;’ na entrada do cabeçalho então
// se o usuário inserir mais ; terá mais campos no array
// Utilize o método split(‘;’) para converter a string para array
// A segunda entrada é o dado (DATA) ele vai possuir o mesmo formato acima porém com
// valores entre ‘;’
// valor1;valor2;valor3;valor4
// [0] valor1
// [1] valor2
// [2] valor3
// [3] valor4
// A quantidade de campos depende da quantidade de ‘;’ na entrada do dado então se o
// usuário inserir mais ; terá mais campos no array
// Utilize o método split(‘;’) para converter a string para array
// As duas entradas devem possuir a mesma quantidade de “;” isso vai permitir que elas
// tenham tamanhos iguais no array e então teremos uma associação parecida com essa
// abaixo :
// Suponha que o usuario inseriu :
// Cabeçalho : Nome;Sobrenome;Idade;Peso
// Dado : Fulano;Ciclano;22;80

// var rs = require("readline-sync");

// var Cabeçalho = rs.question("Informe o cabeçalho: ").split(";")
// var Dados = rs.question("Informe os dados: ").split(";")
// var nmcabecalho = Cabeçalho.length
// var nmdados = Dados.length  


// if( nmdados != nmcabecalho){
//     console.log("O formato não está compatível.");
// }
// else{ for(i = 0; i < nmcabecalho; i++){
//     console.log(`${Cabeçalho[i]}: ${Dados[i]}`);
    
// }
// }