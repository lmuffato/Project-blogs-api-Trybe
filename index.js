const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const categoryController = require('./controllers/categoryController');
const postController = require('./controllers/postController');

const {
  validationCreateUser,
  validationLogin,
  validationtoken,
} = require('./middlewares/validateUser');

const {
  validationCreateCategory,
} = require('./middlewares/validateCategory');

const {
  validationCreatePost,
} = require('./middlewares/validatePost');

const app = express();

app.use(bodyParser.json());
app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.get('/', (request, response) => {
  response.send();
});

//  USER

app.post('/user', validationCreateUser, userController.create);
app.post('/login', validationLogin, userController.login);
app.get('/user', validationtoken, userController.getAll);
app.get('/user/:id', validationtoken, userController.getById);

// ______________________________________________________________ //

//  CATEGORY

app.post('/categories', validationtoken, validationCreateCategory, categoryController.create);
app.get('/categories', validationtoken, categoryController.getAll);

// ______________________________________________________________ //

//  POST

app.post('/post', validationtoken, validationCreatePost, postController.create);

// ______________________________________________________________ //
