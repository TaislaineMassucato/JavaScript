function contar(){
    var n1 = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passo = document.querySelector('input#ipasso')
    var res = document.getElementById('msg')
        
       if(n1.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("Erro faltam dados!!!")
       }else {
        res.innerHTML=("Contando...")
        let i= Number(n1.value)
        let f=Number(fim.value)
        let p=Number(passo.value)
        if (p <= 0){
            window.alert('Nao temm como pular de 0, Vou começar de 1')
            p = 1
        }
        if( i < f){
            //contagem crescente
            for(var c = i; c <= f ; c += p){
                res.innerHTML += `${c} \u{1F449}` 
        }
       }
        else{
            //contagem decrescente
            for (var c = i ; c >= f ; c-=p){
            res.innerHTML += `${c} \u{1F449}`
        }
        
       }
       res.innerHTML += `\u{1F3c1}`
   
    }
}
