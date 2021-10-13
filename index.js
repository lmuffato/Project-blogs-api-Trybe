const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userControllers');
const { validEmail, validName, validPassword } = require('./utils/middlewares');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// Não remova esse endpoint, é para o avaliador funcionar.
app.get('/', (_request, response) => {
  response.send();
});

app.post(
  '/user', 
  validName, 
  validEmail, 
  validPassword,
  userController.createNewUser,
);
