const express = require('express');
const bodyParser = require('body-parser');
const usersController = require('./controllers/usersController');
const loginController = require('./controllers/loginController');
const validateWebToken = require('./middlewares/validateToken');

const app = express();

app.use(bodyParser.json());

app.get('/user', validateWebToken, usersController.getAllUser);
app.get('/user/:id', validateWebToken, usersController.getUserById);
app.post('/user', usersController.create);
app.post('/login', loginController.logIn);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
