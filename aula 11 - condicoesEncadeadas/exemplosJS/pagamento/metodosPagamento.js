// Valor gasto pelo usuario.
// Metodo de pagamento
//   - 1 - Boleto/Pix = 10% desconto
//   - 2 - Credito = Valor total  
//    3- debito = 5% desconto
// metodo de parcelamneto
 // 1 - a vista = valor total
 // 2 - 2x - com juros 5% no valor total
 // 2 - 3x - com juros 10% no valor total


let valorGasto = 1000
let metodoPagamento = 5
let debito = 2
let parcelamneto = 3


if (metodoPagamento == 1) {
    let valorFinal = valorGasto * 0.9
    console.log("MÉTODO DE PAGAMENTO BOLETO/PIX")
    console.log("O valor final foi de R$ " + valorFinal);
} else if ( metodoPagamento == 2){
    valorFinal = valorGasto * 0.95
    console.log("MÉTODO DE PAGAMENTO DEBITO");
    console.log("O valor final foi de " + valorFinal );
    
    

}


else {
    console.log("MÉTODO DE PAGAMENTO CRÉDTIO")
    let metodoParcelamento

    if (metodoParcelamento == 1)
        console.log("VOCE IRA PAGAR O VALOR TOTAL DE " + valorFinal);

    else if (metodoParcelamento == 2){
        valorFinal = valorGasto * 1.05
        console.log("PARCELANDO EM 2X VOCE IRA PAGAR R$  " + valorFinal );
        
    
} else {
    (metodoParcelamento == 3)
    valorFinal = valorGasto * 1.1
        console.log("PARCELANDO EM 3X VOCE IRA PAGAR R$  " + valorFinal );
    

}
        
    



} 