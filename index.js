require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./src/controllers');
const middlewares = require('./src/middlewares');

const app = express();

const { PORT } = process.env;

app.use(bodyParser.json());

// app.listen(3000, () => console.log('ouvindo porta 3000!'));
app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_req, res) => {
  res.send();
});

app.post(
  '/user',
  controllers.user.register,
  middlewares.error,
);
