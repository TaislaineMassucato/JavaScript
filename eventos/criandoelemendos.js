const caixa1 = document.querySelector("#caixa1")
const cursos = ["HTML","CSS","JAVASCRIPT","PHP","REACT","MYSQL"]

cursos.map((el,i)=>{
    const novoelemento = document.createElement("div")
    novoelemento.setAttribute("id","c"+i)
    novoelemento.setAttribute("class","curso c1")
    novoelemento.innerHTML = el
    novoelemento.addEventListener("click",(evt)=>{
        caixa1.removeChild(evt.target)
    })
    caixa1.appendChild(novoelemento) 
})