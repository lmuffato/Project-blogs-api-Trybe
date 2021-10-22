const express = require('express');
const bodyparser = require('body-parser');
const controller = require('./controllers/user');
const { validEmail, validPassword, validateDisplayName } = require('./validations/user');
const { validEmailLogin, validPasswordLogin } = require('./validations/login');
const { validateJWT } = require('./validations/validateJWT');

const app = express();
app.use(bodyparser.json());
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', 
  [validEmail, validPassword, validateDisplayName, controller.createUser]);
app.post('/login', 
  [validEmailLogin, validPasswordLogin, controller.checkUser]);

app.get('/user', [validateJWT, controller.findAll]);

app.listen(3000, () => console.log('ouvindo porta 3000!'));