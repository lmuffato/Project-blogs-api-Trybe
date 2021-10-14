const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userControllers');
const categoryController = require('./controllers/categoryControllers');
const postController = require('./controllers/postControllers');
const { 
  validEmail, 
  validName, 
  validPassword, 
  validLogin,
  validCategory,
  postValidFields,
} = require('./utils/middlewares');

const validateJWT = require('./auth/validateJWT');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// Não remova esse endpoint, é para o avaliador funcionar.
app.get('/', (_request, response) => {
  response.send();
});

app.post(
  '/user', 
  validName, 
  validEmail, 
  validPassword,
  userController.createNewUser,
);

app.post(
  '/login',
  validLogin,
  userController.login,
);

app.get('/user', validateJWT, userController.listUsers);
app.get('/user/:id', validateJWT, userController.findUser);
app.post('/categories', validateJWT, categoryController.createNewCategory);
app.get('/categories', validateJWT, categoryController.listCategories);
app.post('/post', validateJWT, postValidFields, validCategory, postController.createNewPost);
app.get('/post', validateJWT, postController.listPosts);
app.get('/post/:id', validateJWT, postController.findPost);
