let ladoA = 20
let ladoB = 20
let ladoC = 30
let ladoAB = ladoA + ladoB
let ladoAC = ladoA + ladoC
let ladoBC = ladoB + ladoC

// && = and = todas as comparacoes precisam ser verdadeiras
// || = or = apenas uma comparacao precisa ser verdadeira

// equiláteros (três lados iguais), isósceles (dois lados iguais) e escalenos (todos os lados diferentes).

if (ladoAB > ladoC && ladoAC > ladoB && ladoBC > ladoA){
    console.log("LADOS VALIDOS PARA FORMAR UM TRIANGULO");

    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("triangulo equilátero");

    }else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("triangulo isosceles");
    } else{
    console.log("triangulo escaleno");
    
}} else {
    console.log("LADOS INVALIDOS PARA FORMAR UM TRIANGULO");
}
  
   