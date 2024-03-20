const sequence = { // contandor que vai adicionar a sequencia do Id
    _id: 1,
    get id () {return this._id++ }
  }
  
  const produtos = {} 

function salvarProduto(produto) { // faz a soma do id e acrescenta parametros adcionado ao objeto(cria e edita)
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
  }
  
  function getProduto(id) {// chama o produto especifico pelo id, se não tiver ele retorna um array vazio.
    return produtos[id] || {}
  }
  
  
  function getProdutos() {//chama todos os objetos ou lista 
    return Object.values(produtos)
  }
  
  function excluirProduto(id) {//exclui o objetos pelo id 
    const produto = produtos[id]
    delete produtos[id]
    return produto
  }
  
  
  
  module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }// extorta as funções para fora do arquivo