const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;
const app = express();
// importar middlewares

app.use(bodyParser.json());

app.use('/user', routes.users);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

module.exports = app;
