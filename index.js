const express = require('express');
const bodyParser = require('body-parser');
const {
  validateName,
  validateEmailFormat,
  validatePassword,
  validateEmailLogin,
  validatePasswordLogin,
  validateToken,
  validateCategoryName,
  validateCategoriesId,
  validatePost,
  validateCategoriesUpdate,
  validateUserId,
} = require('./midlewares');
const {   
  postUser, 
  postLogin, 
  getUser, 
  getOneUser, 
  postCategory,
  getCategories,
  postPost,
  getPost,
  getOnePost,
  putPost,
  } = require('./controllers');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', validateEmailFormat, validateName, validatePassword, postUser);

app.get('/user', validateToken, getUser);

app.get('/user/:id', validateToken, getOneUser);

app.post('/login', validateEmailLogin, validatePasswordLogin, postLogin);

app.post('/categories', validateToken, validateCategoryName, postCategory);

app.get('/categories', validateToken, getCategories);

app.post('/post', validateToken, validateCategoriesId, validatePost, postPost);

app.get('/post', validateToken, getPost);

app.get('/post/:id', validateToken, getOnePost);

app.put('/post/:id',
  validateToken,
  validateCategoriesUpdate,
  validatePost, 
  validateUserId,   
  putPost);

app.listen(3000, () => console.log('ouvindo porta 3000!'));