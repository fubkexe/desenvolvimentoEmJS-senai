function mostrarResultado(){
    let numero = parseInt(document.getElementById("numero").value)
    let resultado = document.getElementById ("resultado")

    for (let i = 0; i <= 10; i++)
        resultado.innerHTML +=`${numero} x ${i} = ${numero * i} <br> ` 
}