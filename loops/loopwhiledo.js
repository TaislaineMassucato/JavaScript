let n = 10
  //do while
do{
    console.log("Taislaine Massucato")
    n++
}while(n < 10)
console.log("Fim programa")

  //while
   while(n<10){
      console.log("Tailsiane Massucato")
      n++
   }

//Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura sequencial e uma estrutura de repetição while.
let frase ="Hello word!!!"
let i = 1
while(i<=11){
    console.log(frase)
    i++
}

//exibir os números de 1 até 50 na tela.

let cont = 1;

while(cont <=50){
    console.log(cont)
    cont++
}

//Crie um programa para ler 3 notas e mostrar a
//média delas.

let nota = 1;
let final = 0;

while(nota<=3){
    n=parseInt(prompt("Digite sua nota: "))
    final+=n
    nota++
}
alert(`média final é de: ${final/3}`)

//Faça um programa que mostre a tabuada de um número N (N será lido do teclado). 
let N=parseInt(prompt("Digite nº: "))
let t =0
while(t<=10){
    console.log(`${N} x ${t} = ${N*t}`)
    t++
}

//Faça um programa que peça ao usuário um número entre 12 e 20. Se a pessoa digitar um número diferente, mostrar a mensagem "entrada inválida" e solicitar o número novamente. Se digitar correto mostrar o número digitado.

var con = 1
        while(con<=7){
        var num =parseInt(prompt("Digite numero: "))
        if(num >= 12 && num <= 20){
            console.log(`${num}`)
        }else{
               alert("entrada inválida")
            }
            con++
    }
  
    //Do while 

    //Escreva um algoritmo que leia um número do teclado até que encontre um número menor ou igual a 1.

    let numer;

    do{
         numer = parseInt(prompt("Digite numero: "))
    } while(numer >= 1)

//Crie um programa que leia um número do teclado até que encontre um número igual a zero. No final, mostre a soma dos números digitados.

var soma = 0

do{
    valor=parseInt(prompt("Digite número: "))
    soma+=valor
}while(valor!=0)
