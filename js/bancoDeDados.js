const joi = require('joi')

const sequence = { // contandor que vai adicionar a sequencia do Id
  _id: 1,
  get id () {return this._id++ }
}

const produtos = {} 


function validarObjeto (req, res, next) {
  const schema = joi.object({
        nome: joi.string().required(),
        descricao: joi.string().required(),
        preco: joi.number().required(),
        dataCadastro: joi.date().required(),
        dataAtualizada: joi.date().required()
  })

  const { error } = schema.validate(req.body)

  if (error) {
      return res.status(400).json({ error: error.details[0].message })
  }
  next()
}

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



module.exports = { validarObjeto, salvarProduto, getProduto, getProdutos, excluirProduto }// extorta as funções para fora do arquivo