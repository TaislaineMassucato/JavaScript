const todos=[...document.getElementsByClassName("curso")]
const c1=[...document.getElementsByClassName("c1")]
const c2=[...document.getElementsByClassName("c2")]
const especial=document.getElementsByClassName("curso")[1]


c1.map((el)=>{
   el.classList.add("destaque")
})
console.log(c2)
console.log(c1)
console.log(especial)
