const express = require('express');
const bodyParser = require('body-parser');
const User = require('./controllers/userControler');
const error = require('./middlewares/erros');
const Login = require('./controllers/loginController');
const Token = require('./middlewares/tokenValidation');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.get('/user', Token.tokenValidation, User.findUsers);
app.get('/user/:id', Token.tokenValidation, User.findById);
app.post('/user', User.createUser);
app.post('/login', Login.login);
app.use(error);
app.listen(3000, () => console.log('ouvindo porta 3000!'));
