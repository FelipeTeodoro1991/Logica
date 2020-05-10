var Maca = require("readline-sync")
var Qtd_maca = Maca.questionInt("Quantas maças o senhor deseja?")


if (Qtd_maca < 12) {
    console.log ("O valor da sua compra é R$"+(Qtd_maca * 0.30).toFixed(2))
}

else {
    console.log ("O valor da sua compra é R$"+(Qtd_maca * 0.25).toFixed(2))
}