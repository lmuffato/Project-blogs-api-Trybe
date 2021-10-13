const express = require('express');
const bodyParser = require('body-parser');
const { 
  UserController, 
  CategoryController, 
  BlogPostController } = require('./database/controllers');
const ErrorMiddleware = require('./database/middlewares/error');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', UserController.createUser);

app.post('/login', UserController.userLogin);

app.get('/user', UserController.getAllUsers);

app.get('/user/:id', UserController.getUserById);

app.post('/categories', CategoryController.createCategory);

app.get('/categories', CategoryController.getAllCategories);

app.post('/post', BlogPostController.createPost);

app.get('/post', BlogPostController.getAllPosts);

app.use(ErrorMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));