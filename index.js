const express = require('express');
const bodyParser = require('body-parser');
const { validUser, loginUserCheck } = require('./middlewares/userMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
const { register, loginUser, getAll, getByID } = require('./controllers/userController');
const login = require('./middlewares/loginMiddleware');
const Auth = require('./middlewares/authMiddleware');
const validCategoryName = require('./middlewares/categoryMiddleware');
const { createNewCategory, getAllCategories } = require('./controllers/categoryController');
const { validPost, checkIfCategoryExists } = require('./middlewares/postMiddleware');
const { createNewPost, getPosts } = require('./controllers/postController');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', validUser, register, errorMiddleware);
app.post('/login', login, loginUser, errorMiddleware);
app.get('/user', Auth, getAll, errorMiddleware);
app.get('/user/:id', Auth, loginUserCheck, getByID, errorMiddleware);
app.post('/categories', validCategoryName, Auth, createNewCategory, errorMiddleware);
app.get('/categories', Auth, getAllCategories, errorMiddleware);
app.post('/post', Auth, validPost, checkIfCategoryExists, createNewPost, errorMiddleware);
app.get('/post', Auth, getPosts, errorMiddleware); 
