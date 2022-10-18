
///funcao anonima NORMAL
var soma = function(v1,v2){
    return v1+v2
}
console.log(soma(2,3))

///funcao anonima ARROW FUNCTION

var soma=(v1,v2)=>{return v1+v2}

console.log(soma(2,3))

//quando 1 parametro nao precisa de ()
var soma=v1=>{return v1}

console.log(soma(2,3))
