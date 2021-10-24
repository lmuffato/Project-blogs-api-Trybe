const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());

const { PORT = 3000 } = process.env;

const Users = require('./controllers/usersController');
const Login = require('./controllers/loginController');

// User
app.post('/user', Users.createUser);

// login

app.post('/login', Login.loginUser);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
