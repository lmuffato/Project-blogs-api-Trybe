const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const { validationCreateUser } = require('./middlewares/validateUser');

const app = express();

app.use(bodyParser.json());
app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', validationCreateUser, userController.create);
