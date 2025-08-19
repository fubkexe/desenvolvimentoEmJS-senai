const input = require ("prompt-sync")();
let soma  = 0
for (let i = 1; i <= 3; i++){
    let numero = parseInt(input("Digite um valor: "))
    console.log(numero);
    if (numero % 2 === 1 && numero / 3 === 0){
        soma = numero + soma
        console.log(numero);
        
    }   else{
        console.log("O numero nao pode ser somado");
        
    }
    
}

console.log(soma);
// so vai somar numeros impar
// multiplo 3, resto 3


