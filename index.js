const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const routes = require('./routes');
const { verifyToken } = require('./middlewares/loginMiddlewares');
const { getUsersC, getByIdC } = require('./controllers/userController');
const { verifyName } = require('./middlewares/categoryMiddlewares');
const { createCategoryC } = require('./controllers/categoryController');

const PORT = process.env.PORT || 3000;
const app = express();
// importar middlewares

app.use(bodyParser.json());

app.use('/user', routes.users);
app.use('/login', routes.login);
app.get('/user', verifyToken, getUsersC);
app.get('/user/:id', verifyToken, getByIdC);
app.post('/categories', verifyToken, verifyName, createCategoryC);
app.listen(PORT, () => console.log(`ouvindo porta ${PORT}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

module.exports = app;
