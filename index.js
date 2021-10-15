const express = require('express');
const bodyParser = require('body-parser');

const { User } = require('./models');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/users', async (_req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
