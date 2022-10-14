 ///funcao chamada em um bot]ao /pois és dom e não funciona em console
function mudartexto(){
    let t1 = document.getElementById('d1')
    let t2 = document.getElementById('d2')
    let t3 = document.getElementById('d3')

    t1.innerHTML="Oi Mudei"
    t2.innerHTML="Ainda taislaine"
    t3.innerHTML="Eterna studient tecnologia"
}

  ///funcao usando return
function soma(){
    let n1 = 10;
    let n2= 20;
    if(n1>n2){
        return "maior"
    }else{
        return "menor"
    }
}
console.log(soma())



// funcao com parametros


function somar (n1,n2){
    res=n1+n2   
    return res
}

console.log(somar(3,5))


/// funtio somar valor fora da funcion

function fora(v){
    //valor+=v
    valor= valor + v 
}

let valor=10
console.log(valor)

fora(5)
console.log(valor)
