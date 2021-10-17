const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');
const categoryController = require('./controllers/categoryController');
const postController = require('./controllers/postController');

const userMiddlewares = require('./middlewares/userMiddlewares');
const loginMiddlewares = require('./middlewares/loginMiddlewares');
const authMiddlewares = require('./middlewares/authMiddlewares');
const categoryMiddlewares = require('./middlewares/categoryMiddlewares');
const postMiddlewares = require('./middlewares/postMiddlewares');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

// Users
app.post('/user', 
userMiddlewares.validateDisplayNameLength,
userMiddlewares.validateEmail,
userMiddlewares.checkExistingEmail,
userMiddlewares.validadePassword,
userController.create);

app.post('/login',
loginMiddlewares.validadeNotAllowedEmpty,
loginMiddlewares.validadeRequiredFields,
loginMiddlewares.checkExistingUser,
userController.login);

app.get('/user',
authMiddlewares.authValidation,
userController.getAll);

app.get('/user/:id',
authMiddlewares.authValidation,
userController.getById);

// Categories
app.post('/categories',
categoryMiddlewares.validadeCategory,
authMiddlewares.authValidation,
categoryController.create);

app.get('/categories',
authMiddlewares.authValidation,
categoryController.getAll);

// Posts
app.post('/post',
authMiddlewares.authValidation,
postMiddlewares.validadeRequiredFields,
postMiddlewares.categoryIdsNotFound,
postController.create);

app.get('/post',
authMiddlewares.authValidation,
postController.getAll);
