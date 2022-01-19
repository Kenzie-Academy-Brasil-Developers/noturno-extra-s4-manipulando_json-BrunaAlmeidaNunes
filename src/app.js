const listaProdutos = require("./database/Produtos.json");


/**
 * Descomente depois de terminar
 */
 const { childrensDay, beautyDay, mostStarredItems, newItems } = require("./funcoes/composed");
 childrensDay();
 beautyDay();
 mostStarredItems();
 newItems();

modules.export = listaProdutos;