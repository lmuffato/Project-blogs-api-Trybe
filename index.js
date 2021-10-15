const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyparser.json());

const UserController = require('./controllers/userController');
const login = require('./controllers/login');
const {
  validateDisplayName,
  validatePassword,
  validateEmail
} = require('./middlewares/UserCredentials');

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user',
validateDisplayName,
validatePassword,
validateEmail,
UserController.create);

app.post('/login', login);
