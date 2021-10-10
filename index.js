require('dotenv').config();
const express = require('express');

const app = express();
const { PORT } = process.env;
app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
