// 💡 Desafio: Estoque de Livros


// Você tem um array com livros de uma livraria. Cada livro tem um título, preço, categoria e quantidade em estoque.


 let livros = [
     {titulo: "Dom Casmurro", preco: 39.9, categoria: "Romance", estoque: 12},
     {titulo: "1984", preco: 29.9, categoria: "Ficção", estoque: 5},
     {titulo: "O Hobbit", preco: 49.9, categoria: "Fantasia", estoque: 8},
     {titulo: "A Revolução dos Bichos", preco: 19.9, categoria: "Ficção", estoque: 15},
     {titulo: "Senhor dos Anéis", preco: 99.9, categoria: "Fantasia", estoque: 3},
     {titulo: "Capitães da Areia", preco: 25.9, categoria: "Romance", estoque: 10},
     {titulo: "Neuromancer", preco: 35.9, categoria: "Ficção", estoque: 7}
 ]

console.log(livros);
console.log(livros.preco);
console.log(livros.categoria);
console.log(livros.estoque);

 // filtrando os livros
 const livrosFiccao = livros.filter(livros => livros.categoria ===
    "ficção")
    console.log("LIVROS DE FICÇÃO");

 livrosFiccao.forEach((livros)=> {
    console.log(livros.titulo + "RS" + livros.preco);
        

 })

 
 

// 📋 Tarefas:


// Exibir todos os livros com preço e estoque:
// // Exemplo de saída: "O Hobbit - R$49.9 - Estoque: 8"
// Filtrar apenas os livros da categoria "Ficção".
// Aplicar 10% de desconto nos livros da categoria "Fantasia" e criar um novo array com esses livros com desconto.


livros.sort((a, b) => a.titulo.localeCompare((b.categoria)))
console.log(livros);

const valorTotalEstoque = livros.reduce((total, livro)=>{
    let valor = total + livro.preco * livro.estoque;
    return valor

}, 0)


console.log(valorTotalEstoque);


// Ordenar todos os livros pelo preço (do mais barato para o mais caro).
// Calcular o valor total do estoque da livraria (preço × quantidade de cada livro).