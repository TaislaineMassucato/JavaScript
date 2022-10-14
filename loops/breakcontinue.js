var i = 0
var max = 1000
   ///break
for(i; i < max; i++){
    console.log(i)
    if(i==100){
        break
    }
}


   ///continue
   var i = 0
   var max = 1000
   var par=0

   for(i; i < max ; i++){
    if(i%2!=0){
        continue
    }
    par++
}
console.log(`número de pares ${par}`)


///Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 



do{
    var nota = parseInt(prompt("Digite uma nota de 0 a 10: "))
    if(nota < 0 || nota > 10){
        alert("Notas 0 a 10 APENASSSS!!!")
    }
}while(nota >=0 && nota <=10)