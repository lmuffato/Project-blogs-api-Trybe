const express = require('express');
const bodyParser = require('body-parser');

const userControllers = require('./controllers/users');
const categoriesControllers = require('./controllers/categories');
const blogPostControllers = require('./controllers/posts');

const { 
  validateDisplayName,
  validatePassword,
  validateEmail,
  findEmail,
  authToken,
  validateName,
  validateTitle,
  validateContent,
} = require('./middlewares/validations');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/user/:id', [
  authToken,
], userControllers.getById);

app.get('/user', [
  authToken,
], userControllers.getAll);

app.post('/user', [
  validateDisplayName,
  validateEmail,
  validatePassword,
  findEmail,
], userControllers.create);

// ----------- LOGIN ------------

app.post('/login', [
  validateEmail,
  validatePassword,
], userControllers.findUser);

// -----------CATEGORIES ------------

app.get('/categories', [
  authToken,
], categoriesControllers.getAll);

app.post('/categories', [
  authToken,
  validateName,
], categoriesControllers.create);

// ---------- BLOGPOSTS ------------

app.post('/post', [
  authToken,
  validateTitle,
  validateContent,
], blogPostControllers.create);

app.get('/post', blogPostControllers.getAll);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
