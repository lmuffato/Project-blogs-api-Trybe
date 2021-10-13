const express = require('express');
const bodyParser = require('body-parser');

const users = require('./Routes/users');
const { handleErrors } = require('./Middlewares/errors');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/users', users);
app.use(handleErrors);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
