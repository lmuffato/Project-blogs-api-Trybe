const express = require('express');
const bodyParser = require('body-parser'); 
const userController = require('./src/controller/User');
const logInController = require('./src/controller/login');
const midError = require('./src/middleware/error');
const validateToken = require('./src/middleware/token'); 
const categoriesCtrl = require('./src/controller/categories');
const postController = require('./src/controller/post');

const app = express();

app.use(bodyParser.json());
app.use(midError);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.get('/user', validateToken.validateToken, userController.getAll);
app.get('/user/:id', validateToken.validateToken, userController.getById);
app.get('/categories', validateToken.validateToken, categoriesCtrl.allCategories);
app.get('/post', validateToken.validateToken, postController.getAllPosts);

app.post('/user', userController.createUser); 
app.post('/login', logInController.logInUser);
app.post('/categories', validateToken.validateToken, categoriesCtrl.createCategories);
app.post('/post', validateToken.validateToken, postController.createPost);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
