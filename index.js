const express = require('express');
const bodyParser = require('body-parser');
const {
  emailRequired, 
  passwordRequired, 
  validContent, 
  validEmail, 
  validEmailFormat, 
  validName, 
  validPassword, 
  validTitle,
} = require('./middleware/authentication');
const {
  createUser,
  findAllUsers, 
  findUserById, 
  userLogin, 
} = require('./controllers/userController');
const { 
  createCategory, 
  findAllCategories, 
  validCategoryId,
} = require('./controllers/categoriesController');
const { createPost, findAllPosts } = require('./controllers/postController');
const { validToken } = require('./authentication/jwt');

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar

app.get('/', (_request, response) => {
  response.send();
});

app.post('/user',
validEmail,
validEmailFormat,
validName,
validPassword,
createUser);

app.get('/user', validToken, findAllUsers);
app.get('/user/:id', validToken, findUserById);

app.post('/login', emailRequired, 
passwordRequired, 
userLogin);

app.post('/categories', validToken, createCategory);

app.get('/categories', validToken, findAllCategories);

app.post('/post',
  validToken,
  validTitle,
  validContent,
  validCategoryId,
  createPost);

app.get('/post',
validToken,
findAllPosts);
