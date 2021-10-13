const express = require('express');
const bodyParser = require('body-parser');
const { checkInfo } = require('./middlewares/checkUserInfo');
const { createUser, findAllUsers, findUser } = require('./controllers/userController');
const { checkLogin } = require('./middlewares/checkLogin');
const { login } = require('./controllers/loginController');
const { validateToken } = require('./middlewares/validateToken');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.route('/user')
  .post(checkInfo, createUser)
  .get(validateToken, findAllUsers);

app.get('/user/:id', validateToken, findUser);

app.post('/login', checkLogin, login);
