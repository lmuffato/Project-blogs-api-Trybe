const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const middlewaresUser = require('./middlewares/validateInputs');
const middlewaresLogin = require('./middlewares/validateLogin');
const middlewaresToken = require('./middlewares/validateToken');
const middlewaresCategorie = require('./middlewares/validateCategorie');
const userController = require('./controllers/user');
const categoriesController = require('./controllers/categories');

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', middlewaresUser.validateCreateUser, userController.createUser);

app.get('/user', middlewaresToken.validateToken, 
   userController.getUsers);

app.get('/user/:id', middlewaresToken.validateToken, 
   userController.getUserById);

app.post('/login', middlewaresLogin.validateLogin, userController.loginUser);

app.post('/categories', middlewaresCategorie.validateName,
 middlewaresToken.validateToken, categoriesController.createCategorie);
