let calculaMedias = function (arr){
    let numeros = arr
    let somaNumeros = 0
    for (let cont = 0; cont < numeros.length; cont++) {
        somaNumeros = numeros[cont] + somaNumeros
    }
    let mediaNumeros = (somaNumeros/numeros.length)
    return mediaNumeros
    }
    exports.calculaMedias = calculaMedias