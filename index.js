const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyparser.json());

const UserController = require('./controllers/userController');
const CategoryController = require('./controllers/categoryController');
const PostController = require('./controllers/postController');
const login = require('./controllers/login');
const {
  validateDisplayName,
  validatePassword,
  validateEmail,
} = require('./middlewares/UserCredentials');

const {
  validateTitle,
  validateContent,
  validateCategoryIds,
} = require('./middlewares/PostInformation');

const validateJWT = require('./auth/validateJWT');

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user',
validateDisplayName,
validatePassword,
validateEmail,
UserController.create);

app.get('/user',
validateJWT,
UserController.getAll);

app.get('/user/:id',
validateJWT,
UserController.findUser);

app.post('/categories',
validateJWT,
CategoryController.create);

app.get('/categories',
validateJWT,
CategoryController.getAll);

app.post('/post',
validateJWT,
validateTitle,
validateContent,
validateCategoryIds,
PostController.create);

app.get('/post',
validateJWT,
PostController.getAll);

app.post('/login', login);
