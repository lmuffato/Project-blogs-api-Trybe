const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/UserController');
const CategoryController = require('./controllers/CategoryController');
const AuthUser = require('./validations/AuthUser');

const app = express();
app.use(bodyParser.json());

app.post('/user', userController.createUser);
app.post('/login', userController.login);
app.get('/user', AuthUser, userController.listUsers);
app.get('/user/:id', AuthUser, userController.listUserId);
app.post('/categories', AuthUser, CategoryController.createCategory);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
