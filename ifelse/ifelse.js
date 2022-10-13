// Escreva	 um	 programa	 para	 ler	 2	 valores	 (considere	 que	 	 não	 serão	
// informa dos valores	iguais)	e	escrever	o	maior	deles.

let valor1=parseInt(prompt("Digite valor: "));
let valor2=parseInt(prompt("Digite valor: "))

if(valor1===valor2){
    alert("Escreva números diferentes!!")
}else if(valor1 > valor2){
    alert(`${valor1} é maior que ${valor2}`)
}else{
    alert(`${valor2} é maior que ${valor1}`)
}

alert("Fim programa")

// Escreva	 um	 programa	 para	 ler	 o	 ano	 de	 nascimento	 de	 uma	 pessoa	 e	
// escrever	 uma	 mensagem	 que	 diga	 se	 ela	 poderá	 ou	 não	 votar	 este	 ano	
// (não	é	necessário	considerar	o	mês	em	que	ela	nasceu).

let ano = parseInt(prompt("QUAL ANO DO SEU NASCIMENTO: "))
let AnoAtual=parseInt(prompt("QUAL ANO Atual: "))

let AnoFinal = AnoAtual - ano

if(AnoFinal < 16){
    alert(`${AnoFinal}anos: Você não pode votar!!`)
}else if(AnoFinal <=17){
    alert (`${AnoFinal}anos: Pode votar, mas não és obrigatório`)
}else if(AnoFinal > 18 && AnoFinal <=65){
    alert(`${AnoFinal}anos: Obrigatório `)
}

// As	maçãs	 custam	 R$	 0,30	 cada	 se	 forem	 compradas	menos	 do	 que	 uma	
// dúzia,	 e	 R$	 0,25	 se	 forem	 compradas	 pelo	 menos	 doze.	 Escreva	 um	
// programa	 que	 leia	 o	 número	 de	 maçãs	 compradas,	 calcule	 e	 escreva	 o	
// valor	total	da	compra.

let macas = parseInt(prompt("Quantas maças queres comprar? : "))

if(macas < 12){
    preco=macas*0.30
    alert(`Voce comprou ${macas}maças e o valor é de R$0,30 cada total de : ${preco}`)
}else if(macas >=12){
    preco=macas*0.25
    alert(`Voce comprou ${macas}maças e o valor é de R$0,25 cada total de : ${preco}`)
}