const express = require('express');
const bodyParser = require('body-parser');

const usersController = require('./controller/usersController');
const categoryController = require('./controller/categoriesController');
const postsController = require('./controller/postsController');

const { nameValidator, emailValidator, passwordValidator,
loginValidator, postValidator, categoryValidator, updateValidator } = require('./auth/validations');
const { tokenAuth } = require('./auth/tokenAuth');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', nameValidator, emailValidator, passwordValidator, usersController.create);
app.post('/login', loginValidator, usersController.login);

app.get('/user', tokenAuth, usersController.getUsers);
app.get('/user/:id', tokenAuth, usersController.getUser);
app.get('/user/me', tokenAuth, usersController.deleteUser);

app.post('/categories', tokenAuth, categoryController.create);
app.get('/categories', tokenAuth, categoryController.getCategories);

app.post('/post', tokenAuth, postValidator, categoryValidator, postsController.create);
app.get('/post', tokenAuth, postsController.getPosts);
app.get('/post/:id', tokenAuth, postsController.getPost);
app.put('/post/:id', tokenAuth, updateValidator, postsController.updatePost);
app.delete('/post/:id', tokenAuth, postsController.deletePost);