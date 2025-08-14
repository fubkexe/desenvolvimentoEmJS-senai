function mostrarResultado(){
    let ladoA = parseInt(document.querySelector("#lado1").value)
    let ladoB = parseInt(document.querySelector("#lado1").value)
    let ladoC = parseInt(document.querySelector("#lado1").value)
    let resultado = document.querySelector("#resultadoTriangulo")
    let tipoTriangulo = document.querySelector("#tipoTriangulo")
    
    let ladoAB = ladoA + ladoB
    let ladoAC = ladoA + ladoC
    let ladoBC = ladoB + ladoC


    if (ladoAB > ladoC && ladoAC > ladoB && ladoBC > ladoA){
        tipoTriangulo.style.display = "block"
    resultado.innerHTML = "LADOS VALIDOS PARA FORMAR UM TRIANGULO";
    
        if (ladoA === ladoB && ladoB === ladoC) {
        tipoTriangulo.innerHTML = "triangulo equilátero";
        
    }   else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        tipoTriangulo.innerHTML = "triangulo isosceles";
    }   else{
        tipoTriangulo.innerHTML = "triangulo escaleno";

        
        
    }} else {
        tipoTriangulo.style.display ="none"
        tipoTriangulo.innerHTML = "LADOS INVALIDOS PARA FORMAR UM TRIANGULO";
    }
}