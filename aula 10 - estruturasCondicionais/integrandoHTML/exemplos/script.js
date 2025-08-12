function mostrarResultado(){
    let nota1 = parseInt(document.querySelector("#nota1").value)
    let nota2 = parseInt(document.querySelector("#nota2").value)
    let paragrafoResultado = document.querySelector("#resultado")

    let media = ( nota1 + nota2) / 2
    paragrafoResultado.innerHTML = "A sua meidia foi de " + media

    if (media >= 7){
        paragrafoResultado.innerHTML = "aprovado"
        paragrafoResultado.style.color = "green"
    }
    else {
        paragrafoResultado.innerHTML = "reprovado"
        paragrafoResultado.style.color = "red"
    }
}
