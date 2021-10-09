const bodyParser = require('body-parser');
const express = require('express');
const Users = require('./src/controllers/users');
const Login = require('./src/controllers/login');

const app = express();
app.use(bodyParser.json());

const { PORT } = process.env;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

// User
app.post('/user', Users.create);

// Login
app.post('/login', Login.userLogin);