function mostrarResultado(){
    let nota1 = parseInt (document.getElementById("nota1").value)
    let nota2 = parseInt (document.querySelector("#nota2").value)
    let media = (nota1 + nota2) / 2
    console.log(media)

    let resultado = document.querySelector("#resultado")

    resultado.innerHTML = "A media foi igual a " + media
}

//value valor q o usuario digitou
//parseInt converte a nota1 em numero, sem ele a nota vai ser tratada como texto
//number tbm converte em forma numerica
//innerHTML altera o conteudo html direto do javasript