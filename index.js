const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const userMiddlewares = require('./middlewares/userMiddlewares');
const loginMiddlewares = require('./middlewares/loginMiddlewares');
const authMiddlewares = require('./middlewares/authMiddlewares');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', 
userMiddlewares.validateDisplayNameLength,
userMiddlewares.validateEmail,
userMiddlewares.checkExistingEmail,
userMiddlewares.validadePassword,
userController.create);

app.post('/login',
loginMiddlewares.validadeNotAllowedEmpty,
loginMiddlewares.validadeRequiredFields,
loginMiddlewares.checkExistingUser,
userController.login);

app.get('/user',
authMiddlewares.authValidation,
userController.getAll);