const express = require('express');
const UserController = require('./database/controllers/UserController');
const ErrorMiddleware = require('./database/middlewares/error');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', UserController.createUser);

app.post('/login', UserController.userLogin);

app.use(ErrorMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));