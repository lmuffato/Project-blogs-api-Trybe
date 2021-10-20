const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const { createUser, getAllUsers, getById } = require('./controllers/user');
const { userLogin } = require('./controllers/login');
const { tokenValidation } = require('./middlewares/tokenValidation');
const { createCategories } = require('./controllers/categories');
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', createUser);

app.post('/login', userLogin);

app.get('/user', tokenValidation, getAllUsers);

app.get('/user/:id', tokenValidation, getById);

app.post('/categories', tokenValidation, createCategories);

app.listen(3000, () => console.log('ouvindo porta 3000!'));