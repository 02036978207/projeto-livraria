const express = require('express');
const Joi = require('@hapi/joi');

const app = express();
app.use(express.json());

// Middleware para validar o objeto
function validateObject(req, res, next) {
  const schema = Joi.object({
    nome: Joi.string().required(),
    idade: Joi.number().integer().min(0).required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  
  next();
}

// Rota para adicionar um novo objeto
app.post('/objeto', validateObject, (req, res) => {
  // Se o objeto passou na validação, você pode prosseguir com sua lógica aqui
  res.status(200).json({ message: 'Objeto válido!' });
});

// Exemplo de uso da rota de adição
app.post('/adicionar-objeto', (req, res) => {
  // Aqui você receberá um objeto JSON no corpo da solicitação
  res.json(req.body);
});

// Iniciar o servidor
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});