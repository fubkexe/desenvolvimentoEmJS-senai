function mostrarMulta(){
    let velocidade = parseInt(document.getElementById("velocidade").value)
    let velocidadeResultado = document.getElementById("velocidadeResultado")
    let velocidademaxima = 80
    let kmUltrapassado = velocidade - velocidademaxima
    let valorkm = 7

    if (isNaN (velocidade)){
        velocidadeResultado.innerHTML = "INFORME UM VALOR VALIDO"
        return
    }


if (velocidade > velocidademaxima ){
    let kmUltrapassado = velocidade - velocidademaxima
    let multa = kmUltrapassado * valorkm
    velocidadeResultado.innerHTML = ("Voce foi multado <br> e tera que pagar R$ "+ multa)
    
}else{
    velocidadeResultado.innerHTML = "sem"
    
}

}
// velocidade atual passar da velocidade permitida

//onclick="mostrarResultado()": Especifica que a função JavaScript mostrarResultado() deve ser executada quando o botão é clicado. 


  //if (isNaN (velocidade)){
        //velocidadeResultado.innerHTML = "INFORME UM VALOR VALIDO"
        //return
    //}
    //SE ESSE IF FOR VERDADEIRO, IRA EXUCUTAR A MENSAGEM, CASO O USUARIO DIGITE ALGO N IRA EXECUTAR