function mostrarResultado(){
    let nota1 = parseInt(document.querySelector("#nota1").value)
    let nota2 = parseInt(document.querySelector("#nota2").value)
    let notaRecuperacao = document.querySelector("#notaRecuperacao")
    let resultadoMedia = document.querySelector("#media")
    let resultado =document.querySelector("#resultado")

    let valorNotaRecuperacao = parseInt(notaRecuperacao.value)

    let media = (nota1 + nota2) / 2
    resultadoMedia.innerHTML = "A sua media é de " + media

    if (media >= 70){
        resultado.innerHTML =   "APROVADO"
        resultado.style.color = "green"
    } else if (media >=50) {
        resultado.innerHTML = "RECUPERAÇÃO"
        resultado.style.color = "orange"


        notaRecuperacao.style.display = "block"

        let mediaFinal = (media + valorNotaRecuperacao) / 2

        if (mediaFinal >= 70){
            resultado.innerHTML= "APROVADO"
            resultado.style.color = "green"
        } else{
            resultado.innerHTML = "REPROVADO"
            resultado.style.color = "RED"
        }

    }
}