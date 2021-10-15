require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}`));

app.use(bodyParser.json());
app.use(router);