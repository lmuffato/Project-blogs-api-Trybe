const express = require('express');
const bodyParser = require('body-parser');

const userControllers = require('./controllers/users');
const { 
  validateDisplayName,
  validatePassword,
  validateEmail,
  findEmail,
  authToken,
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

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
