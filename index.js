const express = require('express');
const bodyParser = require('body-parser');
const { checkInfo } = require('./middlewares/checkUserInfo');
const { createUser } = require('./controllers/userController');
const { checkLogin } = require('./middlewares/checkLogin');
const { login } = require('./controllers/loginController');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', checkInfo, createUser);

app.post('/login', checkLogin, login);
