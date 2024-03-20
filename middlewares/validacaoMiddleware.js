const joi = require('joi');

function validarObjeto(req, res, next) {
    const schema = joi.object({
        nome: joi.string().required(),
        descricao: joi.string().required(),
        preco: joi.number().required(),
        dataCadastro: joi.date().required(),
        dataAtualizada: joi.date().required()
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}

module.exports = validarObjeto;