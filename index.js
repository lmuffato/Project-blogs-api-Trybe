const bodyParser = require('body-parser');
const express = require('express');
const userController = require('./controllers/user');
const categoryController = require('./controllers/category');
const blogPostController = require('./controllers/post');
const validateToken = require('./middlewares/jwtAuth');

const app = express();
app.use(bodyParser.json());

app.post('/user', userController.createUser);
app.post('/login', userController.loginUser);
app.get('/user/:id', validateToken, userController.getUserById);
app.get('/user', validateToken, userController.getUser);

app.post('/categories', validateToken, categoryController.createCategory);
app.get('/categories', validateToken, categoryController.getCategories);
app.post('/post', validateToken, blogPostController.createPost);
app.get('/post', validateToken, blogPostController.getPost);
app.get('/post/:id', validateToken, blogPostController.getPostById);
app.put('/post/:id', validateToken, blogPostController.editPostById);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));