const express = require('express');
const bodyParser = require('body-parser');

const { user } = require('./models');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/users', async (req, res) => {
  const users = await user.findAll();
  res.status(200).json(users);
});

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
