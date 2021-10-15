const express = require('express');
const bodyParser = require('body-parser');

const { authToken } = require('./middlewares/token');
const errorMiddleware = require('./middlewares/error');
const userController = require('./controllers/userController');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', userController.createUser);
app.get('/user', authToken, userController.getAllUsers);
app.get('/user/:id', authToken, userController.getUserById);

app.use(errorMiddleware);