let times = ["santos", "corinthians,","São Paulo chatao", "palmeiras bobo"]


//verificar um valor de um item a partir da posição
console.log(times[0]);
console.log(times [3]);


//Adicionando itens no array
times.push("Flamengo")
times.push("Gremio")
times.push("Ponte-preta")
console.log(times);

//Verificando o tamanho do array
console.log((times.length));

//adicionar items na primeira posição
times.unshift("Fluminense")
console.log(times);


//remover items no começo da lista
times.shift(times)
console.log(times);


// remover items no final da lista
times.pop()


//encontrar a posição de um item

console.log (times.indexOf("São Paulo chatao"))

let time2 = ["santos","São Paulo chatao", "palmeiras"]

//.sploce

//remover elemento (1,1) = posicao e qual item
time2.splice(1,1)
console.log(time2);

//substituir elementos
time2.splice(1,2, "São Paulo", "corinthians")
console.log(time2);




