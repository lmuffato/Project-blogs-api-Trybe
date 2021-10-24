const express = require('express');
const bodyParser = require('body-parser').json;
const userController = require('./controllers/userController');
const categoryController = require('./controllers/categoryController');

const app = express();
app.use(bodyParser());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', userController.addNewUser);
app.get('/user', userController.getAllUsers);
app.get('/user/:id', userController.getUserByID);

app.post('/login', userController.requestLogin);

// categoryController
app.post('/categories', categoryController.addCategory);
app.get('/categories', categoryController.getAllCategory);
