const express = require('express');
const bodyParser = require('body-parser');
const validations = require('./middlewares/validations');
const userController = require('./controllers/usersController');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar

app.get('/', (_request, response) => {
  response.send();
});

app.post('/user',
  validations.validateName,
  validations.validateEmailRequired,
  validations.validateEmailFormat,
  validations.validatePassword,
  userController.createUser);
