const express = require('express');
const bodyParser = require('body-parser');

const controllerUser = require('./controllers/controllerUser');
const controllerLogin = require('./controllers/controllerLogin');
const controllerCategory = require('./controllers/controllerCategory');
const controllerPost = require('./controllers/controllerPost');
const middleValidUser = require('./middlewares/userValidations');
const middleValidPost = require('./middlewares/postValidations');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', 
  middleValidUser.validName,
  middleValidUser.validEmail,
  middleValidUser.validPassword,
  controllerUser.createUser);

app.post('/login',
  middleValidUser.validEmail,
  middleValidUser.validPassword,
  controllerLogin.loginUser);

app.get('/user', middleValidUser.verifyToken, controllerUser.getAllUsers);

app.get('/user/:id', middleValidUser.verifyToken, controllerUser.getUserById);

app.post('/categories', middleValidUser.verifyToken, controllerCategory.createCategory);

app.get('/categories', middleValidUser.verifyToken, controllerCategory.getCategories);

app.post('/post',
  middleValidPost.validTitleContent,
  middleValidPost.validCategory,
  middleValidUser.verifyToken,
  controllerPost.createPost);

app.get('/post', middleValidUser.verifyToken, controllerPost.getPosts);
