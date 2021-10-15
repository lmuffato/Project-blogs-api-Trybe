const express = require('express');
const bodyParser = require('body-parser');
const { validUser } = require('./middlewares/userMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
const { register, loginUser } = require('./controllers/userController');
const login = require('./middlewares/loginMiddleware');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', validUser, register, errorMiddleware);
app.post('/login', login, loginUser, errorMiddleware);
