const express = require('express');
const bodyParser = require('body-parser');
const { authToken } = require('./middlewares/authMiddleware');

const app = express();
app.use(bodyParser.json());

const userController = require('./controllers/userController');
const categoryController = require('./controllers/categoryController');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', userController.createUser);
app.post('/login', userController.userLogin);
app.post('/categories', authToken, categoryController.createCategory);

app.get('/user', authToken, userController.getAll);
app.get('/user/:id', authToken, userController.getById);
app.get('/categories', authToken, categoryController.getAllCategories);

app.listen(3000, () => console.log('ouvindo porta 3000!'));