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


