const dc1 =document.getElementById("curso1")
const dc2 =document.getElementById("curso2")
const dc3 =document.getElementById("curso3")
const dc4 =document.getElementById("curso4")
const dc5 =document.getElementById("curso5")
const dc6 =document.getElementById("curso6")

const arraycursos =[dc1,dc2,dc3,dc4,dc5,dc6]

arraycursos.map((e)=>{
    e.innerHTML="Bora estudar serumaninho!!!"
    console.log(e)

})


//Usar for para percorrer array mas quando quero percorrer sem para melhor ,MAP
        // for (i of arraycursos)
        // console.log(i)