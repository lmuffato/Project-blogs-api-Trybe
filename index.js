const express = require('express');
const bodyParser = require('body-parser');
const {
  validateName,
  validateEmailFormat,
  validatePassword,
  validateEmailLogin,
  validatePasswordLogin,
  validateToken,
  validateCategoryName,
} = require('./midlewares');
const { postUser, postLogin, getUser, getOneUser, postCategory } = require('./controllers');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', validateEmailFormat, validateName, validatePassword, postUser);

app.get('/user', validateToken, getUser);

app.get('/user/:id', validateToken, getOneUser);

app.post('/login', validateEmailLogin, validatePasswordLogin, postLogin);

app.post('/categories', validateToken, validateCategoryName, postCategory);