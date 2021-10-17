const express = require('express');
const {
  displayValidation,
  passwordValidation,
  emailValidation,
  alreadyExists,
} = require('./middlewares/userValidations');
const { emailEmpty,
  passwordEmpty,
  UserExists } = require('./middlewares/loginValidations');
const userController = require('./controller/userController');

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
UserExists, userController.userLogin);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
