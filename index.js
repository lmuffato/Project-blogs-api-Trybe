const express = require('express');
const {
  displayValidation,
  passwordValidation,
  emailValidation,
  alreadyExists,
} = require('./middlewares/userValidations');
const { emailEmpty,
  passwordEmpty,
} = require('./middlewares/loginValidations');
const userController = require('./controller/userController');
const { validateToken } = require('./middlewares/jwt');

const app = express();
app.use(express.json());

app.post('/user', displayValidation,
emailValidation,
passwordValidation,
alreadyExists,
userController.createUsers);

app.post('/login', 
emailEmpty,
passwordEmpty, 
userController.userLogin);

app.get('/user', validateToken, userController.getAllUsers);

app.get('/user/:id', validateToken, userController.getAllByID);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
