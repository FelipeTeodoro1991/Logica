    let imprimeTextos = () => {
    let texto = document.getElementById('texto')
    let imputValue = texto.value
    let palavras = imputValue.split(' ')
    let lista = document.createElement('ul')
    for (let i = 0; i < palavras.length; i++) {
        let palavra = palavras[i]
        let item = document.createElement('li')
        item.innerText = `${palavra}`
        lista.append(item)
    }
    document.body.append(lista)
    }

    let carregaSite = () =>{
        let pegaIdade = document.getElementById('idade')
        let idade = pegaIdade.value
        if( idade >= 18){
           open('http://www.pudim.com.br/')
        }
        else { open('https://www.mundobita.com.br/')
    } }
   