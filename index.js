const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const users = require('./controllers/users');
const categories = require('./controllers/categories');
const posts = require('./controllers/posts');

const {
  nameValidation,
  emailValidation,
  passwordValidation,
  findEmail,
  tokenAuthentication,
  validateName,
  titleValidation,
  contentValidation,
  categoryIdValidation,
} = require('./utils/validations');

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

app.post('/user', nameValidation, emailValidation, passwordValidation, findEmail, users.create);

app.get('/user/:id', tokenAuthentication, users.getById);

app.get('/user', tokenAuthentication, users.getAll);

app.get('/categories', tokenAuthentication, categories.getAll);

app.post('/categories', tokenAuthentication, validateName, categories.create);

app.post('post', tokenAuthentication, titleValidation, 
  contentValidation, categoryIdValidation, posts.create);

app.get('post', tokenAuthentication, posts.getAll);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
