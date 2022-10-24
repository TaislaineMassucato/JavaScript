//Crie uma função que recebe um inteiro positivo e teste para saber se ele é primo ou não. Faça um script que recebe um inteiro n e mostra todos os primos, de 1 até n.

///funcao 

const isPrime = (...num) => {
  for(i of num){
  var primo=0
      if (num % i == 0) {
        primo++
      }
    }
  }
  isPrime(5)
  if(primo==2){
        console.log(`${num} é primo`)
      }else{
        console.log(`${num} no é primo`)
      }