const express = require('express');
const bodyParser = require('body-parser');

const { authToken } = require('./middlewares/token');
const errorMiddleware = require('./middlewares/error');
const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');
const categoryController = require('./controllers/categoryController');
const postController = require('./controllers/postController');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', userController.createUser);
app.get('/user', authToken, userController.getAllUsers);
app.get('/user/:id', authToken, userController.getUserById);

app.post('/login', loginController.userLogin);

app.post('/categories', authToken, categoryController.createCategory);
app.get('/categories', authToken, categoryController.getAllCategories);

app.post('/post', authToken, postController.createPost);
app.get('/post', authToken, postController.getAllPosts);

app.use(errorMiddleware);