 //funcao anonima 2parametros
var fun = function(n1,n2){
    return n1+n2
}
console.log(fun(2,5))


///funcao anonima REST(MAIS DE 3 PARAMETROS OU SEM VALOR DEFINIDO DE PARAMETRO)

var fu = function(...valor){
    let res=0
    for(i of valor){
        res+=i
    }
    return res
}

console.log(fu(2,3,4,5,6))

///funcao construtor

var ano= new Function("v1","v2","v3","return v1+v2+v3")

console.log(ano(1,2,3))
