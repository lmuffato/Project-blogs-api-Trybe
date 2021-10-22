const express = require('express');
const bodyParser = require('body-parser');
const User = require('./controllers/userControler');
const error = require('./middlewares/erros');
const Login = require('./controllers/loginController');
const Token = require('./middlewares/tokenValidation');
const Category = require('./controllers/categoryController');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

// User
app.get('/user', Token.tokenValidation, User.findUsers);
app.get('/user/:id', Token.tokenValidation, User.findById);
app.post('/user', User.createUser);

// Login
app.post('/login', Login.login);

// Categories
app.get('/categories', Token.tokenValidation, Category.findCategories);
app.post('/categories', Token.tokenValidation, Category.createCategory);
app.use(error);
app.listen(3000, () => console.log('ouvindo porta 3000!'));
