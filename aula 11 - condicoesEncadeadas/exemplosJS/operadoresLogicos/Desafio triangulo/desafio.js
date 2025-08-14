function mostrarResultado (){
    let ladoA = parseInt(document.querySelector("#lado1").value)
    let ladoB = parseInt(document.querySelector("#lado1").value)
    let ladoC = parseInt(document.querySelector("#lado1").value)
    let resultado = ducument.querySelector("resultado")
    let tipoTriangulo = document.querySelector("#tipoTriangulo")
    
    let ladoAB = ladoA + ladoB
    let ladoAC = ladoA + ladoC
    let ladoBC = ladoB + ladoC


    if (ladoAB > ladoC && ladoAC > ladoB && ladoBC > ladoA){
    console.log("LADOS VALIDOS PARA FORMAR UM TRIANGULO");
    
        if (ladoA === ladoB && ladoB === ladoC) {
        console.log("triangulo equilátero");
        
    }   else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("triangulo isosceles");
    }   else{
        console.log("triangulo escaleno");
        
    }} else {
        console.log("LADOS INVALIDOS PARA FORMAR UM TRIANGULO");
    }
}