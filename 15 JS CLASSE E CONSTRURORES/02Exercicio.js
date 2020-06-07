// 2. Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior idade, se mais de
// um possuir maior idade apresentar o nome de todos os que possuem maior idade.
// 2.1 Para isso crie uma classe Aluno que receba duas variáveis no construtor nome e idade
// e inicialize essas variáveis nas propriedades do objeto.
// 2.2 Após isso peça para o usuário cadastrar o primeiro aluno e solicite nome e idade.
// 2.3 Crie o objeto do aluno e adicione em um array.
// 2.4 Repita esse passo para os outros alunos.
// Ao final o algoritmo deve iterar pelo array de alunos e descobrir quais são os alunos
// com maior idade e imprimir seus nomes.
let rs = require('readline-sync');

class Alunos {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

let alunos = []

for(let cont = 0; cont <= 2; cont++){
   let nome = rs.question(`Cadastre o nome do ${cont+1} aluno: `) 
   let idade = rs.questionInt(`Cadastre o idade do ${cont+1} aluno: `) 
   let aluno = new Alunos(nome,idade)
    alunos.push(aluno)
}

let maiorIdade = 18
let alunosMaiorIdade = []

for(let cont = 0 ; alunos.length > cont ; cont++){
    if ( alunos[cont].idade >= maiorIdade){
        alunosMaiorIdade.push(alunos[cont])
    }
}
let conta = 0
while(alunosMaiorIdade.length > conta){
console.log(`O Aluno: ${alunosMaiorIdade[conta].nome} é maior de Idade`)
conta++
}