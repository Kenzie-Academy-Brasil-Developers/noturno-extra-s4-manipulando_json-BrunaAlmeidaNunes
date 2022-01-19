const listaProdutos = require("../database/Produtos.json");


//Crie uma função childrensDay que deve buscar todos os 
//brinquedos em estoque que estão em promoção. Retorno os itens com valores computados.

const  childrensDay = () => {
	
	    const listaBrinquedosPromocao = listaProdutos.filter((lista) => {
       	 return lista.discount['enabled'] === 'true' && lista.category === 'toy';

    });
    return listaBrinquedosPromocao;

}
//console.log(childrensDay());
childrensDay();

//Crie uma função beautyDay que deve buscar todos os itens cosméticos em estoque 
//que estão em promoção. Retorno os itens com valores computados.

const beautyDay = () => {

		const listaProdutosDeBelezaPromocao = listaProdutos.filter((lista) => {
       	 return lista.discount['enabled'] === 'true' && lista.category === 'beauty';

    });
    return listaProdutosDeBelezaPromocao;

}
//console.log(beautyDay());
beautyDay();

// Crie uma função ``mostStarredItems`` que deve buscar todos os itens com nota __5.0__ 
//e então retornar o top 3 mais votados.

const mostStarredItems = () => {

		const listaProdutosTopDeVotos = listaProdutos.filter((lista) => {
       	 return lista.rate === 5;

    });
    return listaProdutosTopDeVotos; 

}
//console.log(mostStarredItems());
mostStarredItems();
// Crie uma função ``newItems`` que deve buscar todos os itens com nota __0.0__ e sem votos.

const newItems = () => {

		const listaProdutosNovos = listaProdutos.filter((lista) => {
       	 return lista.rate === 0 && lista.votes === 0;

    });
    return listaProdutosNovos;

}
//console.log(newItems());
newItems();