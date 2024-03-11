const port = 3000

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))// tratamento de dados para mostrar o objeto body
app.use(bodyParser.json())

app.get('/produtos', (req, res) => { //essa rota me tras a lista de todos os produtos
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res) => { //essa rota me tras um unico id de produtos
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res) => {//essa rota cria e salva o produto 
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,
        dataCadastro: req.body.dataCadastro,
        dataAtualizada: req.body.dataAtualizada
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res) => {//essa rota edita o produto 
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,
        dataCadastro: req.body.dataCadastro,
        dataAtualizada: req.body.dataAtualizada
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res) => {//essa rota exclui o produto
    const produto = bancoDeDados.excluirProduto(req.params.id)     
    res.send(produto)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  

