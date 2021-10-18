const express = require('express');
const bodyParser = require('body-parser');
const validations = require('./middlewares/validations');
const userController = require('./controllers/usersController');
const categoriesController = require('./controllers/categoriesController');
const postsController = require('./controllers/postsController');
const { validateJWTToken } = require('./auth/authJWT');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar

app.get('/', (_request, response) => {
  response.send();
});

// --------- USER --------

app.post('/user',
  validations.validateName,
  validations.validateEmailRequired,
  validations.validateEmailFormat,
  validations.validatePassword,
  userController.createUser);

app.get('/user', validateJWTToken, userController.findAllUsers);

app.get('/user/:id', validateJWTToken, userController.findUserById);

// --------- LOGIN --------

app.post('/login',
  validations.validateEmailIsNotEmpty,
  validations.validatePasswordIsNotEmpty,
  userController.login);

// --------- Category ----------

app.post('/categories', validateJWTToken, categoriesController.createCategory);

app.get('/categories', validateJWTToken, categoriesController.findAllCategories);

// --------- Post ----------

app.post('/post',
  validateJWTToken,
  validations.validateTitle,
  validations.validateContent,
  validations.validateCategoryId,
  postsController.createPost);

app.get('/post',
validateJWTToken,
postsController.findAllPosts);

app.get('/post/:id',
validateJWTToken,
postsController.findPostById);