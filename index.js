const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

const usersController = require('./controllers/userController');
const authMiddleware = require('./middlewares/authMiddleware');
const categoryController = require('./controllers/categoryControler');
const postController = require('./controllers/postController');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.get('/user', authMiddleware, usersController.getAll);
app.get('/user/:id', authMiddleware, usersController.getById);
app.get('/categories', authMiddleware, categoryController.getAll);
app.get('/post', authMiddleware, postController.getAll);
app.get('/post/:id', authMiddleware, postController.getById);
app.post('/user', usersController.create);
app.post('/login', usersController.login);
app.post('/categories', authMiddleware, categoryController.create);
app.post('/post', authMiddleware, postController.create);

app.listen(3000, () => console.log('ouvindo porta 3000!'));