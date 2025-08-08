function mostrarResultado(){
    let numero = parseInt(document.querySelector("#numero").value)
    let dobro = numero*2
    let triplo = numero*3
    let raiz = Math.sqrt(numero)

    let paragrafoDobro = document.querySelectorAll("p")[0]
    let paragrafoTriplo = document.querySelectorAll("p")[1]
    let paragrafoRaiz = document.querySelectorAll("p")[2]

    dobro.innerHTML = "O dobro é igual a " + dobro
    triplo.innerHTML = "O dobro é igual a " + triplo
    raiz.innerHTML = "O dobro é igual a " + raiz.toFixed(2)
}