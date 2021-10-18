const express = require('express');
const bodyParser = require('body-parser');

const { validateToken } = require('./middlewares/tokenValidation');
const {
  createUserController,
  getAllUserController,
  getUserByIdController,
} = require('./controllers/user');
const { loginController } = require('./controllers/login');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', createUserController);
app.get('/user', validateToken, getAllUserController);
app.get('/user/:id', validateToken, getUserByIdController);

app.post('/login', loginController);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
