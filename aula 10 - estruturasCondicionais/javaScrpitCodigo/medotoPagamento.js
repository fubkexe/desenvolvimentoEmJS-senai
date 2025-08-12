// Valor gasto pelo usuario.
// Metodo de pagamento
//   - Dinheiro/Pix = 10% desconto
//   - Credito = Valor total 

let valorGasto = 1000
let metodoPagamrnto = 1

//comparaçoes

if (metodoPagamrnto = 1){
    console.log("METODO BOELTO/ PIX");
    let valorFinal = valorGasto * 0.9
    console.log("O valor final foi de R$" + valorFinal);

    
    
} else{
    console.log("METODO DE PAGAMENTO CREDITO");
    console.log("o VALOR FINAL FOI DE R$" + valorGasto);
    
}