const express = require('express');
const bodyParser = require('body-parser'); 
const userController = require('./src/controller/User');
const logInController = require('./src/controller/login');
const midError = require('./src/middleware/error');

const app = express();

app.use(bodyParser.json());

app.use(midError);
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', userController.createUser); 
app.post('/login', logInController.logInUser);
app.listen(3000, () => console.log('ouvindo porta 3000!'));
