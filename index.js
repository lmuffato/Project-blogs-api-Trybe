const express = require('express');
const bodyParser = require('body-parser');

const usersController = require('./controller/usersController');
const { nameValidator,
emailValidator,
passwordValidator } = require('./auth/validations');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/', nameValidator, emailValidator, passwordValidator, usersController.create);