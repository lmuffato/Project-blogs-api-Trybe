const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userControllers');
const loginController = require('./controllers/loginController');
const categoriesController = require('./controllers/categorieController');
const midlware = require('./midlware/auth');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', userController.createUser);
app.post('/login', loginController.login);
app.get('/user', midlware.validateJWT, userController.getUser);
app.get('/user/:id', midlware.validateJWT, userController.getById);
app.post('/categories', midlware.validateJWT, categoriesController.postCategorie);
app.get('/categories', midlware.validateJWT, categoriesController.getCategory);
