//inicio da ATIVIDADE 3
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
//fim da ATIVIDADE3

//inicio da ATIVIDA4
let calculaMediaIdadeAluno = function (aluno){
    let pegaAlunos = aluno
    let somaDasIdades = 0
for(let cont = 0; cont < pegaAlunos.length; cont++){
    let idade = pegaAlunos[cont].idade
    somaDasIdades = somaDasIdades + idade    
}
let mediaDasIdades = somaDasIdades/pegaAlunos.length
return mediaDasIdades
}
    exports.calculaMediaIdadeAluno = calculaMediaIdadeAluno
//fim da ATIVIDADE4