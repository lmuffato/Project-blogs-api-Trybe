const express = require('express');
const bodyParser = require('body-parser');

const { create, findAll, login, findById } = require('./src/controllers/userController');
const { createCategory, getAllCategories } = require('./src/controllers/categoriesController');
const { createPost } = require('./src/controllers/postControllers');
const { validateJWT } = require('./src/auth/validateJWT');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

// const { UserRouter } = require('./src/router/UserRouter');

// app.use('/user', UserRouter);

app.get('/user', validateJWT, findAll);
app.post('/user', create);
app.post('/login', login);
app.get('/user/:id', validateJWT, findById);

app.post('/categories', validateJWT, createCategory);
app.get('/categories', validateJWT, getAllCategories);

app.post('/post', validateJWT, createPost);
