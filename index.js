const express = require('express');
const bodyParser = require('body-parser');

const userControllers = require('./controllers/users');
const categoriesControllers = require('./controllers/categories');

const { 
  validateDisplayName,
  validatePassword,
  validateEmail,
  findEmail,
  authToken,
  validateName,
} = require('./middlewares/validations');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/user/:id', [
  authToken,
], userControllers.getById);

app.get('/user', [
  authToken,
], userControllers.getAll);

app.post('/user', [
  validateDisplayName,
  validateEmail,
  validatePassword,
  findEmail,
], userControllers.create);

app.post('/login', [
  validateEmail,
  validatePassword,
], userControllers.findUser);

app.get('/categories', categoriesControllers.getAll);

app.post('/categories', [
  authToken,
  validateName,
], categoriesControllers.create);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
