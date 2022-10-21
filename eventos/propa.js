const caixa1=document.querySelector("#caixa1")
const div4=document.querySelector("#c4")
const todoscurso =[...document.querySelectorAll(".c1")]

todoscurso.map((el)=>{
   el.addEventListener("click",(evt)=>{
        evt.stopPropagation()
    })
})
caixa1.addEventListener("click",()=>{
    console.log("clicou")
})

