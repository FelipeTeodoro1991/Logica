// 1. Faça um algoritmo em que o usuário possa cadastrar preços de produtos e no final
// exiba o preço de cada produto junto com o valor total. após inserir todos os produtos o
// programa deve pedir o valor a ser pago, caso o valor passe do da compra exibir o troco,
// se o valor for menor informar que a compra vai ser cancelada.
// EX entradas :
// 0.75
// 0.25
// 2.50
// Valor total pago: 5.00
// O programa imprime :
// Produto 1 - 0.75
// Produto 2 - 0.25
// Produtos 3 - 2.50
// Total da compra : 3.50 $
// Troco : 1.50 $


var rs = require("readline-sync")
var NovoLançamento = "A"
var Produto = []
var Soma = 0

while(NovoLançamento != "S"){
ValorProduto = rs.questionInt("Informe o valor do produto")
Produto.push(ValorProduto)
Soma = Soma + ValorProduto
var NovoLançamento = rs.question("Digite 'S' para sair do programa ou qualquer ou tecla para continuar lançar")
}

var Pagamento = rs.questionInt("Informe o valor a ser pago: ")

if(Soma <= Pagamento){
    for(i = 0; i < Produto.length; i++){
        console.log(`Produto${i+1}-R$${Produto[i]}`);
    }
    console.log(`Total da compra ${Soma}`);
    console.log(`Toma aqui o seu troco ${Pagamento -Soma}`)
}
else{console.log("mao de vaca")}

	