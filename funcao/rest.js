 ///parametro REST

function gata(...soma){

    let res=0
    
    //For pra percorreer array 
    for(i of soma){
        res=res+i
    }
    //ou
    for(i in soma){
        res=res+soma[i]
    }
    return res

}

console.log(gata(1,4,7,6,5,3,3,5,6,7))