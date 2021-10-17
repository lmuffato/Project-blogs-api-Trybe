const express = require('express');
const bodyParser = require('body-parser');
const validations = require('./middleware/authentication');
const userController = require('./controllers/userController');

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar

app.get('/', (_request, response) => {
  response.send();
});

app.post('/user',
  validations.validEmail,
  validations.validEmailFormat,
  validations.validName,
  validations.validPassword,
  userController.createUser);
