const port = 3003
const express = require('express')
const app = express()
const bancoDeDados = []
let a = 0
 



app.post('/produtos/:nome/:descricao/:preco/:dataCadastro/:dataAtualizada', (req, res) => {

    a =  a + 1
   
    //Método para adicionar um array no final 
    bancoDeDados.push({

            
        
            id: a,
            nome: req.params.nome,
            descricao: req.params.descricao,
            preco: req.params.preco,
            dataCadastro: req.params.dataCadastro,
            dataAtualizada: req.params.dataAtualizada
        }
    )
    res.send(bancoDeDados)

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


