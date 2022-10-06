 "use strict"

 function teste(){
    if(true){
        let nome = "Taislaine"
        console.log(`Teste dentro do IF,variavel visivél: ${nome}`)
    }
    console.log(`Dentro da função onde esta variavel: ${nome}`)
 }
 teste()
 console.log(`Fora do Teste e da Função: ${nome}`)