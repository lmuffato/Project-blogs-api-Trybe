const express = require('express');
const bodyParser = require('body-parser');
const Users = require('./controllers/UserController');
const Validations = require('./middlewares/Validations');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', [
  Validations.validateName,
  Validations.validateEmail,
  Validations.validatePassword,
  Users.createUser,
]);
