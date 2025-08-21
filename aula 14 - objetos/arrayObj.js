let produtos = [
    {tipo: "notbook:",  preco: 4000, categoria: "eletronico"},
    {tipo: "teclado:",  preco: 400, categoria: "periferico"},
    {tipo: "mouse:",  preco: 200, categoria: "periferico"},
    {tipo: "computador:",  preco: 5000, categoria: "eletronico"},
    {tipo: "Monitor:",  preco: 800, categoria: "eletronico"},
    {tipo: "fone:",  preco: 20, categoria: "eletronico"},
    {tipo: "microfone:",  preco: 200, categoria: "eletronico"},
    {tipo: "processador:",  preco: 3200, categoria: "eletronico"},
    {tipo: "placa de video:",  preco: 2000, categoria: "eletronico"},
    {tipo: "mouse pad:",  preco: 50, categoria: "periferico"}




]



//ARRAY produtos
produtos.forEach((produtos) =>{
    console.log(produtos.tipo + "R$" + produtos.preco);
    

})

//filtro items de uma lista
const produtosEletronicos = produtos.filter(produtos => produtos.categoria === "eletronico")
console.log("PRODUTOS ELETRONICOS");

produtosEletronicos.forEach((produto) => {
    console.log(produto.tipo + "R$" + produtos.preco);
    
})

//map altera valores dentro do array
const produtosEletronicosDesconto = produtosEletronicos.map(produto =>({
    tipo: produto.tipo,
    preco: produto.preco * 0.95,
    categoria: produtos.categoria

}))