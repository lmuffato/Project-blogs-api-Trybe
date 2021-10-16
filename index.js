const express = require('express');
const bodyParser = require('body-parser');

const controllerUser = require('./controllers/controllerUser');
const middleValidUser = require('./middlewares/userValidations');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', 
  middleValidUser.validName,
  middleValidUser.validEmail,
  middleValidUser.validPassword,
  controllerUser.createUser);