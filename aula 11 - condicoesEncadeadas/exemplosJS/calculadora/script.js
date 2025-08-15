function operacoes(){
let numero1 = parseInt(document.querySelector("#numero1").value)
let numero2 = parseInt(document.querySelector("#numero2").value)
let operacoes = document.getElementById("operacoes").value
let resultado = document.querySelector("#resultado")
let resulatadoConta


if (operacoes === "1") {
    resulatadoConta = numero1 + numero2
    resultado.innerHTML = "O resultado da soma é " + resulatadoConta

}

else if (operacoes === "2") {
    resulatadoConta = numero1 - numero2
    resultado.innerHTML = "O resultado da subtração é " + resulatadoConta

}

else if (operacoes === "3") {
    resulatadoConta = numero1 * numero2
    resultado.innerHTML = "O resultado da multiplicacão é " + resulatadoConta

}

else if (operacoes === "4") {
    resulatadoConta = numero1 / numero2
    resultado.innerHTML = "O resultado da divisao é " + resulatadoConta

}
}
