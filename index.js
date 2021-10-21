const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

const usersController = require('./src/controllers/usersController');

const nameValidation = require('./src/middlewares/nameValidation');
const emailValidation = require('./src/middlewares/emailValidation');
const passwordValidation = require('./src/middlewares/passwordValidation');
const { existingUserValidation } = require('./src/middlewares/existingUserValidation');

app.post('/user', nameValidation, emailValidation, passwordValidation, existingUserValidation,
usersController.create);
