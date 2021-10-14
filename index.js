const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

const usersController = require('./controllers/userController');
// const loginController = require('./controllers/loginController');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', usersController.create);
app.post('/login', usersController.login);

app.listen(3000, () => console.log('ouvindo porta 3000!'));