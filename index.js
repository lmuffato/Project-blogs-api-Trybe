const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

const userController = require('./src/controllers/userController');
const categoryController = require('./src/controllers/categoryController');
const { validateToken } = require('./src/utils/middlewares/validateToken');

app.post('/user', userController.create);
app.post('/login', userController.findByCredentials);
app.get('/user', validateToken, userController.getAll);
app.get('/user/:id', validateToken, userController.getById);

app.post('/categories', validateToken, categoryController.create);

app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
