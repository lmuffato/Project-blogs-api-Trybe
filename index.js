require('dotenv').config();
const express = require('express');

const app = express();

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use((err, _req, res, _next) => {
  const { status, message } = err;
  const statusCode = status || 500;

  res.status(statusCode).json({
    message,
  });
});
