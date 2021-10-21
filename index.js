const express = require('express');
const bodyParser = require('body-parser');
const { createUser, getAll, getById } = require('./controller/user');
const { userLogin } = require('./controller/login');
const { tokenValidation } = require('./middleware/tokenValidation');
const { createCategories, getAllCategories } = require('./controller/categories');
const { createPost, getAllPost } = require('./controller/post');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', createUser);
app.get('/user', tokenValidation, getAll);
app.get('/user/:id', tokenValidation, getById);

app.post('/login', userLogin);

app.post('/categories', tokenValidation, createCategories);
app.get('/categories', tokenValidation, getAllCategories);

app.post('/post', tokenValidation, createPost);
app.get('/post', tokenValidation, getAllPost);
