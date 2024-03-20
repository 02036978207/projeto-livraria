const bancoDeDados = require('../models/bancoDeDados');

function listarProdutos(req, res) {
    res.send(bancoDeDados.getProdutos());
}

function obterProduto(req, res) {
    res.send(bancoDeDados.getProduto(req.params.id));
}

function criarProduto(req, res) {
    const produto = bancoDeDados.salvarProduto(req.body);
    res.json(produto);
}

function editarProduto(req, res) {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,
        dataCadastro: req.body.dataCadastro,
        dataAtualizada: req.body.dataAtualizada
    });
    res.send(produto);
}

function excluirProduto(req, res) {
    const produto = bancoDeDados.excluirProduto(req.params.id);
    res.send(produto);
}

module.exports = {
    listarProdutos,
    obterProduto,
    criarProduto,
    editarProduto,
    excluirProduto
};