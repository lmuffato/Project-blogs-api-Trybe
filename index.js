const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

const userController = require('./src/controllers/userController');
const categoryController = require('./src/controllers/categoryController');
const blogPostController = require('./src/controllers/blogPostController');
const { validateToken } = require('./src/utils/middlewares/validateToken');

app.post('/user', userController.create);
app.post('/login', userController.findByCredentials);
app.get('/user', validateToken, userController.getAll);
app.get('/user/:id', validateToken, userController.getById);

app.post('/categories', validateToken, categoryController.create);
app.get('/categories', validateToken, categoryController.getAll);

app.post('/post', validateToken, blogPostController.create);
app.get('/post', validateToken, blogPostController.getAll);

app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
