const port = 3000

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')


app.get('/produtos', (req, res) => { //essa função me tras a lista de todos os produtos
    res.send(bancoDeDados.getProdutos())
})

app.post('/produtos/:id', (req, res) => { //essa função me tras um unico id de produtos
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos/:nome/:descricao/:preco/:dataCadastro/:dataAtualizada', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.params.nome,
        descricao: req.params.descricao,
        preco: req.params.preco,
        dataCadastro: req.params.dataCadastro,
        dataAtualizada: req.params.dataAtualizada
    })
    res.send(produto)
})






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  

// app.post('/produtos/:id/:nome/:descricao/:preco/:dataCadastro/:dataAtualizada', (req, res) => {


//     bancoDeDados.splice(0, 3)  
//     bancoDeDados[2] =   {
//         id: 1,
//         nome: "Senhor dos Anéis",
//         descricao: 'história',
//         preco: 12.99,
//         dataCadastro: '08/06/2024',
//         dataAtualizada: '08/06/2024'
//     }

//     bancoDeDados[3] =   {
//         id: 1,
//         nome: "Senhor dos Anéis",
//         descricao: 'história',
//         preco: 12.99,
//         dataCadastro: '08/06/2024',
//         dataAtualizada: '08/06/2024'
//     }


//     //Método para adicionar um array no final 
//     bancoDeDados.push({
//         id: 7,
//         nome: "Senhor dos Anéis",
//         descricao: 'história',
//         preco: 12.99,
//         dataCadastro: '08/06/2024',
//         dataAtualizada: '08/06/2024'
//     });



//     console.log(bancoDeDados)
    
//     res.send(bancoDeDados)

// })


