const express = require('express');
const bodyParse = require('body-parser');
const controllerUser = require('./controller/user');

const app = express();

app.use(bodyParse.json());
app.use(express.json());

const Port = 3000;

app.post('/user', controllerUser.createUser);

app.post('/login', controllerUser.login);

app.get('/user', controllerUser.getAll);

app.use((err, _req, res, _next) => {
  const { message, status } = err;
  res.status(status).json({ message });
});

app.listen(Port, () => console.log(`ouvindo porta ${Port}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
