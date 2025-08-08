function mostrarResultado(){
    //captura o valor do input
    let numero = parseInt (document.getElementById("numero").value)
   
    //calcula o sucessor e o antecessor 
    let antecessor = (numero - 1)
    let sucessor = (numero + 1)


    console.log(antecessor)
    console.log(sucessor)
    
    //captura o paragrafo
    let resultado1 = document.querySelector("#resultado1")
    let resultado2 = document.querySelector("#resultado2")
    
    //alterando o texto paragrafo
    resultado1.innerHTML = "O antecessor do numero é " + antecessor
    resultado2.innerHTML = "O sucessor do numero é " + sucessor}
   
