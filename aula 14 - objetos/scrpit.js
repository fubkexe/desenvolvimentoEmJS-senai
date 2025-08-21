//variavel composta
let produto = {
    tipo: "nootbok",
    preco: 3500,
    marca: "positivo",
    processador: "intel celeron",
    emEstoque: true
}
//Exibir a informção de um item no objeto
console.log(produto); //positivo
console.log(produto.preco); //3500
console.log(produto["tipo"]); // notbook
console.log(produto["processador"]); // intel celeron

//adicionar itens no objeto
produto.memoriaRam = "4 gb"
console.log(produto);

//remover item 
delete produto.emEstoque
console.log(produto);



