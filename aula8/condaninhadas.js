var idade =66

if(idade < 18){
    console.log(`Não vota`)
}else{
    if(idade < 18 || idade > 65){
        console.log(`Voto Opcional.`)
    }else{ 
        console.log(`Obrigatório votar`)
    }
}