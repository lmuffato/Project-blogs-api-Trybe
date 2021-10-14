const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// Se desconstruir não vai pro ou
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Servidor conectado na porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
