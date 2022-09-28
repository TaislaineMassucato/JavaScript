let valor = [1,2,3,4,5]
               
    for(let cont in valor){
        console.log(valor[cont])
    }

    let pos = valor.indexOf(0)
    if(pos==-1){
       
        console.log(`valor não encontrado no array`)
    }else{
        console.log(`Valor 3 está no índice ${pos}`)
    }

    

        //Formas padrão
        //1-   console.log(valor)//

           //Outro jeitinho (pior)//
        //2-   console.log(valor[0])
        //     console.log(valor[1])
        //     console.log(valor[2])
        //     console.log(valor[3])
        //     console.log(valor[4])
        
                        ////Melhor e inteligente///
        //for(let cont = 0 ; cont < valor.length ; cont++){

            //console.log(`A posição ${cont} tem o valor ${valor[cont]}`)}

                        //Forma mais simplificada


