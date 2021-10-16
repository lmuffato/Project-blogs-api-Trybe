const express = require('express');
const bodyParser = require('body-parser');
const userValidate = require('./middleware/userValidate');
const userController = require('./controllers/userController');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.post('/user', userValidate, userController.createUser);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
