const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const validateUser = require('./middlewares/validateUser');
const userController = require('./controllers/userController');
const validateToken = require('./middlewares/token');
const validateLogin = require('./middlewares/validateLogin');
const loginController = require('./controllers/loginController');
 
app.post('/user', validateUser, userController.createUser);
app.post('/login', validateLogin, loginController.userLogin);
app.get('/user', validateToken.validateToken, userController.getUser);
app.get('/user/:id', validateToken.validateToken, userController.getUserById);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
