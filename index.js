const express = require('express');
const bodyParser = require('body-parser');

const { createUserController } = require('./controllers/user');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', createUserController);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
