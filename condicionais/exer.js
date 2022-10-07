//Substituir @ pela consicao correta para dar :true / false

//resul seja true
let x = 10;
let y = 5;
console.log(x>y)

//resul false
let w = "10";
let z = 10;
console.log(w===z)

//resul true
let a =10;
let b =5;
console.log(b!=a)

//Criar condicional para verificar se o preço da carne etá barata pPS:ATÉ 45 BARATO

let PrecoCarne = 100;

let verificador = PrecoCarne <= 45

if(verificador){
    console.log(`Barato`);
}else {
    console.log(`caro`);
}