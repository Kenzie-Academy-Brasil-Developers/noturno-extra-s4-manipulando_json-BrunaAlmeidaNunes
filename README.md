# Entrega: Manipulando JSON

## Introdução

Arquivos JSON são uma maneira rápida e fácil de organizar informações e facilitar o tratamento dos dados quando necessário. 

Nessa entrega vocês receberão um arquivo ``produtos.json`` e deverão tratar as informações para que possamos usar de diversas maneiras diferentes no futuro em um dos nossos sites.

## Tarefa

Em seu arquivo ``app.js``, a variável global ``produtos`` está atualmente armazenando um array de dados Javascript vindos de um arquivo de notação JSON.

### Funções bases

Use o arquivo ``base.js`` para desenvolver funções base de filtro que terão como objetivo, tratar os dados para o nossa página web:

1. Uma função ``filterByCategory`` que receba uma __String__ chamada ``category`` como parâmetro e retorne todos os itens da categoria passada. Exemplo:
```javascript
filterByCategory("toy");
//Deveria retornar todos os itens do arquivo JSON da categoria "Toy"
```

2. Uma função ``filterByRate`` que receba um __Number__ chamado ``rate`` como parâmetro e retorne todos os itens com mais de 1 voto com nota acima do parâmetro passado. Exemplo:
```javascript
filterByRate(4);
//Deveria retornar todos os itens do arquivo JSON com mais de 1 voto com nota acima de 4
```

3. Uma função ``productsOnSale`` que retorne todos os itens com ``discount.enabled`` como ``true``.

4. Uma função ``computeSale`` que recebe um __Array__ produto, calcula o desconto no valor total e retorne o produto com valor atualizado.

5. Uma função ``productsOnStock`` que retorne todos os produtos com mais de 1 item no estoque.

### Funções compostas

Nessa última etapa, você deverá usar funções bases para chegar ao resultado esperada. Use o arquivo ``composed.js`` para desenvolver funções que chamem por funções base para encontrar a solução. Essa funções devem retornar os dados como notação JSON.

1. Crie uma função ``childrensDay`` que deve buscar todos os brinquedos em estoque que estão em promoção. Retorno os itens com valores computados.

2. Crie uma função ``beautyDay`` que deve buscar todos os itens cosméticos em estoque que estão em promoção. Retorno os itens com valores computados.

3. Crie uma função ``mostStarredItems`` que deve buscar todos os itens com nota __5.0__ e então retornar o top 3 mais votados.

4. Crie uma função ``newItems`` que deve buscar todos os itens com nota __0.0__ e sem votos.