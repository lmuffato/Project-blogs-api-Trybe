const express = require('express');
const bodyParser = require('body-parser');

const { create, findAll } = require('./src/controllers/userController');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

// const { UserRouter } = require('./src/router/UserRouter');

// app.use('/user', UserRouter);

app.post('/user', create);
app.get('/user', findAll);
