let jogador1= {nome:"jao", magia:10, força:56 , vida:100};
let jogador2= {nome:"jao", magia:10, força:56 , vida:100 , velocidade:23 , dor:32};
let jogador3= {...jogador1,...jogador2};

console.log (jogador3);