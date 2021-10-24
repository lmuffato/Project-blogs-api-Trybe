const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
