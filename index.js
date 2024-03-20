const express = require('express');
const bodyParser = require('body-parser');
const produtosController = require('./controllers/produtosController');
const validarObjeto = require('./middlewares/validacaoMiddleware');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/produtos', produtosController.listarProdutos);
app.get('/produtos/:id', produtosController.obterProduto);
app.post('/produtos', validarObjeto, produtosController.criarProduto);
app.put('/produtos/:id', validarObjeto, produtosController.editarProduto);
app.delete('/produtos/:id', produtosController.excluirProduto);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});