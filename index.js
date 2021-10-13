const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/userRouters');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.use('/user', user);

app.use((error, _req, res, _next) => {
  console.log(error);
  res.status(error.status).json({ message: error.message });
});

app.listen(PORT, () => console.log(`Online na porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
