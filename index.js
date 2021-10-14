const express = require('express');
const bodyParser = require('body-parser');
const {
  validateName,
  validateEmailFormat,
  validatePassword,
} = require('./midlewares');
const { postUser } = require('./controllers');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', validateEmailFormat, validateName, validatePassword, postUser);