const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

const userController = require('./src/controllers/userController');

app.post('/user', userController.create);

app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
