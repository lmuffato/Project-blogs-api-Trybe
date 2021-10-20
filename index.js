const express = require('express');
const bodyParser = require('body-parser');

const { validateToken } = require('./middlewares/tokenValidation');
const {
  createUserController,
  getAllUserController,
  getUserByIdController,
} = require('./controllers/user');
const { loginController } = require('./controllers/login');
const { createCategoryController, getAllCategoryController } = require('./controllers/categories');
const { createPostController, getAllPostController } = require('./controllers/post');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

// --------------------------------------- USER ------------------------------ //

app.post('/user', createUserController);
app.get('/user', validateToken, getAllUserController);
app.get('/user/:id', validateToken, getUserByIdController);

// --------------------------------------- LOGIN ------------------------------ //

app.post('/login', loginController);

// --------------------------------------- CATEGORY ------------------------------ //
app.post('/categories', validateToken, createCategoryController);
app.get('/categories', validateToken, getAllCategoryController);

// --------------------------------------- POST ------------------------------ //
app.post('/post', validateToken, createPostController);
app.get('/post', validateToken, getAllPostController);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
