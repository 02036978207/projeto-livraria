const port = 3000

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))// tratamento de dados para mostrar o objeto body

app.get('/produtos', (req, res) => { //essa função me tras a lista de todos os produtos
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res) => { //essa função me tras um unico id de produtos
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {//cria e salva o produto 
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,
        dataCadastro: req.body.dataCadastro,
        dataAtualizada: req.body.dataAtualizada
    })
    res.send(produto)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  

