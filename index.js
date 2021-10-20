const express = require('express');
const bodyParser = require('body-parser');
const { createUser } = require('./src/controllers/userController');
const { loginUser } = require('./src/controllers/loginController');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.post('/user', createUser);
app.post('/login', loginUser);
