const express = require('express');
const bodyParser = require('body-parser');
// const routerUser = require('./routes/user');
const controllerUsers = require('./controllers/users');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', controllerUsers.create);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
