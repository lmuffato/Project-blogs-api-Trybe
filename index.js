const express = require('express');
const bodyParser = require('body-parser');

const userControllers = require('./controllers/users');
const { 
  validateDisplayName,
  validatePassword,
  validateEmail,
  findEmail,
} = require('./middlewares/validations');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/users', userControllers.getAll);

app.post('/user', [
  validateDisplayName,
  validateEmail,
  validatePassword,
  findEmail,
], userControllers.create);

app.post('/login', userControllers.findUser);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
