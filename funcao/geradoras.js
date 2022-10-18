  ///funcao geradora
function* cores(){
    yield 'red'
    yield 'green'
    yield 'pink'
    yield 'purple'
    yield 'yellow'

}
const itf = cores()
console.log(itf.next().value)
console.log(itf.next().value)
console.log(itf.next().value)
console.log(itf.next().value)
console.log(itf.next().value)


//// outro exemplo
console.log("---------------------------------------------------------------------------")
function* perguntas(){
    const nome=yield "Qual teu nome?"
    const esport=yield "Qual teu esporte favorito?"
    console.log("-------------------")
    return console.log(`Meu nome és ${nome} e Meu esporte favorito és:${esport}`)
  
}

const res=perguntas()
console.log(res.next().value)
console.log(res.next("Tay").value)
console.log(res.next("Futebol").value)