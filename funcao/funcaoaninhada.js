
///funcao aninhadaaa
const somar = (...num)=>{
    const soma = val =>{
        let res = 0
        for(i of val)
        res+=i
        return res 
    }
    return soma(num)
}
console.log(somar(10,5,15))