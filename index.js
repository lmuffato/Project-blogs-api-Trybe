const express = require('express');
const bodyparser = require('body-parser');
const controllerUser = require('./controllers/userController');
const { validEmail, validPassword, validateDisplayName } = require('./validations/user');
const { validEmailLogin, validPasswordLogin } = require('./validations/login');
const { validateJWT } = require('./validations/validateJWT');
const controllerCategory = require('./controllers/categoryController'); 
const { validateCategoryName } = require('./validations/category');

const app = express();
app.use(bodyparser.json());
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', 
  [validEmail, validPassword, validateDisplayName, controllerUser.createUser]);
app.post('/login', 
  [validEmailLogin, validPasswordLogin, controllerUser.checkUser]);

app.get('/user', [validateJWT, controllerUser.findAll]);

app.get('/user/:id', [validateJWT, controllerUser.findById]);

app.post('/categories', 
  [validateCategoryName, validateJWT, controllerCategory.createCategory]);

  app.get('/categories', 
  [validateJWT, controllerCategory.findAllCategory]);
  
app.listen(3000, () => console.log('ouvindo porta 3000!'));