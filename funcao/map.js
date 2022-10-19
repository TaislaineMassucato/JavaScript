   
   
   ///MAP

//    let dir=document.getElementsByTagName("div")
//    dir=[...dir]     
//    dir.map((el,i)=>{
//         console.log(el)
//     })

    ///MODO USO 
    
    const dobrar= (e)=> e*2
    let num2 = ["1","2","3","4","5"].map(dobrar)

    const inteiro = (i)=>parseInt(i)
    let num = ["1","2","3","4","5"].map(inteiro)
    console.log(num)
    console.log(num2)
   
   
   
   
//    const cursos=['HTML','CSS','JS','PHP','REACT']
//        cursos.map((el,i)=>{
//           console.log(`Curso: ${el} -- Posição: ${i}`)
//       })


    ////Usando for tradicional


    // const cursoo=['HTML','CSS','JS','PHP','REACT']
    //     for(i in cursoo){
    //         console.log(`Curso: ${cursoo[i]}-- Posicao: ${i}`)
    //     }