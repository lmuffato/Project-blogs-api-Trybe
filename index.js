const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();
const routes = require('./routes/router');
const error = require('./middlewares/error');

app.use(bodyParser.json());
// ******** variáveis de ambiente ***********
const PORT = process.env.PORT || 3000;

// ******** endpoints ***********************
app.use('/', routes, error);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));