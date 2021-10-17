const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// Se desconstruir não vai para o "ou 3000" (Dica: Coruja)
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

// Validações
const validarUsuario = require('./middlewares/validarUsuario');
const validarLogin = require('./middlewares/validarLogin');
const validarCategories = require('./middlewares/validarCategories');
const { validarToken } = require('./middlewares/token');

// Controlers
const usuarioControllers = require('./controllers/usuarioController');
const categoriesController = require('./controllers/categoriesController');

// Início das rotas
app.post('/user', validarUsuario, usuarioControllers.criarUsuario);
app.post('/login', validarLogin, usuarioControllers.usuarioLogin);
app.get('/user', validarToken, usuarioControllers.buscarUsuarios);
app.get('/user/:id', validarToken, usuarioControllers.buscarUsuarioPorID);
app.post('/categories', validarToken, validarCategories, categoriesController.criarCategories);
app.get('/categories', validarToken, categoriesController.buscarCategories);
// Fim das rotas

app.listen(PORT, () => console.log(`Servidor conectado na porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
