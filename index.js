const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const middlewaresUser = require('./middlewares/validateInputs');
const middlewaresLogin = require('./middlewares/validateLogin');
const userController = require('./controllers/user');

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', middlewaresUser.validateCreateUser, userController.createUser);

app.post('/login', middlewaresLogin.validateLogin, userController.loginUser);