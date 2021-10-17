const express = require('express');
const bodyparser = require('body-parser');
const controller = require('./controllers/user');
const { validEmail, validPassword, validateDisplayName } = require('./validations/user');
// const { getToken } = require('./middleware/getToken');

const app = express();
app.use(bodyparser.json());
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', 
  [validEmail, validPassword, validateDisplayName, controller.createUser]);

app.listen(3000, () => console.log('ouvindo porta 3000!'));