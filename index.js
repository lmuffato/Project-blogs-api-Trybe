const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

const routes = require('./src/routes');
const error = require('./src/middlewares/error');

const PORT = process.env.PORT || 3000;

// Rotas

app.use('/user', routes.User);

app.use('/login', routes.Login);

app.use('/categories', routes.Categories);

app.use(error);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log('ouvindo porta 3000!'));