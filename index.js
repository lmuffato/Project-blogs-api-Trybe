const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyparser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
