const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./src/controllers/userController');
const loginController = require('./src/controllers/loginController');
const validateJWT = require('./src/middlewares/validateJWT');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.post('/user', userController.createUser);
app.post('/login', loginController.loginUser);
app.get('/user', validateJWT.authToken, userController.getAllUser);
app.get('/user/:id', validateJWT.authToken, userController.getUserById);
