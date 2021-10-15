const express = require('express');
const bodyParser = require('body-parser');

const UserController = require('./controllers/UserController');
const CategoryController = require('./controllers/CategoryController');

const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', UserController.createUsers);
app.post('/login', UserController.loginUsers);
app.get('/user', UserController.getAllUsers);
app.get('/user/:id', UserController.getOneUser);
app.post('/categories', CategoryController.createCategories);
app.get('/categories', CategoryController.getAllCategories);

app.listen(port, () => console.log('ouvindo porta 3000!'));
