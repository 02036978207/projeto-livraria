let produtos = [
  {
      id: '001',
      nome: "Senhor dos Anéis",
      descricao: 'história',
      preco: 12.99,
      dataCadastro: '08/06/2024',
      dataAtualizada: '08/06/2024'
  },
]

function listarProdutos() {
  return produtos
}

function buscarProduto(id) {
  return produtos.find(produto => produto.id === id)
}

function adicionarProduto(produto) {
  produtos.push(produto)
  return produto
}

function atualizarProduto(id, novosDados) {
  const index = produtos.findIndex(produto => produto.id === id)
  if (index !== -1) {
      produtos[index] = { ...produtos[index], ...novosDados }
      return produtos[index]
  }
  return null
}

function removerProduto(id) {
  const index = produtos.findIndex(produto => produto.id === id)
  if (index !== -1) {
      const produtoRemovido = produtos.splice(index, 1)[0]
      return produtoRemovido
  }
  return null
}

module.exports = {
  listarProdutos,
  buscarProduto,
  adicionarProduto,
  atualizarProduto,
  removerProduto
}