const listaProdutos = require("../database/Produtos.json");
 
//console.log(listaProdutos);
//const listaProdutos = JSON.parse(listaProdutos);

//console.log(objLista) ;


const  filterByCategory = () => {
	
  const produtosPorCategoria = listaProdutos.filter((lista) => {
      return lista.category === 'toy';

      
   });

   return produtosPorCategoria;
  
}
//console.log(filterByCategory())
filterByCategory();


const filterByRate = () => {

    const listaPorVoto = listaProdutos.filter((lista) => {
      return lista.rate >= '1';

    });
    return listaPorVoto;

}
//console.log(filterByRate())
filterByRate();


const productsOnSale = () => {

    const listaPromocao = listaProdutos.filter((lista) => {
        return lista.discount['enabled'] === 'true';

    });
    return listaPromocao;

}
//console.log(productsOnSale())
productsOnSale();



const computeSale = (produtos) => {

      return produtos.map((produto) => {
          produto.value = (produto.value - (produto.value * produto.discount.percentage / 100)).toFixed(2);
            return produto;
        })


    
    

   

}
//console.log(computeSale(productsOnSale()))
computeSale(productsOnSale());

const productsOnStock = () => {

  const emEstoque = listaProdutos.filter((lista) => {

      return lista.stockQuantity >= '1';

    });
    return emEstoque;

}
//console.log(productsOnStock())
productsOnStock();
