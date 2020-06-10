// 4. Criar uma função que receba uma coleção de alunos e calcule a média de idade
// Adicione uma nova função no arquivo calcula-media.js chamada
// calculaMediaIdadeAluno(alunos).

// A função deve receber um array da mesma classe dos alunos criada na atividade 2.

// Após isso a função deve iterar pelos alunos e calcular a média de idade e retornar ela.

// Adicione essa função para ser exportado pelo módulo.

// Adicione no final do programa da atividade 2 após informar o nome dos alunos com
// maior idade também imprimir a média de idade dos alunos utilizando o método
// calculaMediaIdadeAluno(alunos)



//inicio da ATIVIDADE 2
let rs = require('readline-sync');
let mda = require('./calcula-media')

class Alunos {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

let alunos = []

for (let cont = 0; cont <= 2; cont++) {
    let nome = rs.question(`Cadastre o nome do ${cont + 1} aluno: `)
    let idade = rs.questionInt(`Cadastre o idade do ${cont + 1} aluno: `)
    let aluno = new Alunos(nome, idade)
    alunos.push(aluno)
}

let maiorIdade = 18
let alunosMaiorIdade = []

for (let cont = 0; alunos.length > cont; cont++) {
    if (alunos[cont].idade >= maiorIdade) {
        alunosMaiorIdade.push(alunos[cont])
    }
}
let conta = 0
while (alunosMaiorIdade.length > conta) {
    console.log(`O Aluno: ${alunosMaiorIdade[conta].nome} é maior de Idade`)
    conta++
}
//Fim do exercicio2

//inicio da atividade4:
let mediaDeIdades = mda.calculaMediaIdadeAluno(alunos);
console.log(`A média das idades dos alunos é de ${mediaDeIdades} anos`);
//Fim da Atividade4