const express = require('express');
const bodyParser = require('body-parser');

const users = require('./Routes/users');
const categories = require('./Routes/categories');
const posts = require('./Routes/posts');

const { handleErrors } = require('./Middlewares/errors');
const { validateLogin } = require('./Middlewares/user');

const UserController = require('./Controllers/userController');

const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send();
});

app.post('/login', validateLogin, UserController.login);

app.use('/user', users);
app.use('/categories', categories);
app.use('/post', posts);
app.use(handleErrors);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
