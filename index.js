const bodyParser = require('body-parser');
const express = require('express');
const userController = require('./controllers/user');
const validateToken = require('./middlewares/jwtAuth');

const app = express();
app.use(bodyParser.json());

app.post('/user', userController.createUser);
app.post('/login', userController.loginUser);
app.get('/user', validateToken, userController.getUser);
// app.get('/user', userController.getUser);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));