let obj = document.getElementsByTagName("div")

for(i in obj){
    console.log(obj[i].innerHTML)
}
for(i of obj){
    console.log(i.innerHTML="cURSO")
}

//Escrever um programa para exibir os números de 1 até 50 na tela.

for(let i = 1 ; i <=50 ; i++){
    console.log(i)
}

//Fazer um programa para encontrar todos os números pares entre 1 e 100.

for(let i = 1; i <=100 ; i++){
    if(i%2==0){
        console.log(`${i} par`)
    }else{
        console.log(`${i} ímpar`)
    }
}

//Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.
 alert("Digite valor de 1  a 10")
let valor = parseInt(prompt("Digite um número: "))      
   if(valor<1 || valor > 10){
    alert("Digite valor de 1  a 10")
   }else{
       for(let i = 1; i<=10 ; i++){
          console.log(`${valor} x ${i} = ${valor*i}`)
}
   }

   //Ler 10 números e imprimir quantos são pares e quantos são ímpares.

   let par = 0
   let impar= 0

   for(let i = 1 ; i <=10 ; i++){
    let num = parseInt(prompt("Digite número: "))
    if(num%2==0){
        par++
    }else{
        impar++
    }
   }
   console.log(`pares ${par} impar${impar}`)

   //receba 10 números e conte quantos deles estão no intervalo [10,20] e quantos deles estão fora do intervalo, escrevendo estas informações.

   let intervalo = 0;
   let forainter = 0;

   for(let i = 1; i<=10 ; i++){
    let num = parseInt(prompt("Digite número: "))
    if(num>=10 && num<=20){
        intervalo++
    }else{
        forainter++
    }
   }
   console.log(`intervalo de [10,20]: ${intervalo} && fora: ${forainter}`)