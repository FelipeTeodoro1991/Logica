class Carro {
    constructor(marca, modelo, cor, velocidade){
        this.marca = marca 
        this.modelo = modelo
        this.cor = cor
        this.velocidade = velocidade
    }
}
let velocidades = 0

// d. Acelerar => Toda vida que esta função for executada deve incrementar o valor da propriedade velocidade em 10 ii. A função não pode permitir que uma velocidade seja superior a 60
let acelerar = function(v) {
    if (v < 60) {
        return carro1.velocidade = v + 10
    } else {
        console.log('Velocidade acima do permitido')
    }
}

//Frear i. Toda vida que esta função for executada deve diminuir o valor da propriedade da velocidade em 5. A função não pode permitir que a velocidade seja menor que 0
let frear = function (v){
    if(v > 0 ){
        return carro1.velocidade = v - 5
    }
    else{ console.log('Velocidade abaixo do permitido "0" ')}
}

// f. Desligar, esta função deve retornar um boolean. Desligar só retorna true quando a velocidade for igual a 0.Desligar retorna false quando a velocidade for superior a 0
let desligar = function (v){
    if(v == 0 ){
        return cars = true
    }
    else{
        console.log('O veiculo não pode ser desligado pois está em movimentos')
    }
}

exports.desligar = desligar
exports.frear = frear
exports.acelerar = acelerar
exports.Carro = Carro

