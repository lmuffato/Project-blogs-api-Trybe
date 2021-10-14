const express = require('express');
const bodyParser = require('body-parser');

const UserController = require('./controllers/UserController');

const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', UserController.createUsers);

app.listen(port, () => console.log('ouvindo porta 3000!'));
