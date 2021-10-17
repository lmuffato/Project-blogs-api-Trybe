const express = require('express');
const bodyParser = require('body-parser');
require('dotenv/config');

const {
  userRouter,
  categoriesRouter,
  loginRouter,
  postRouter } = require('./routers');

const app = express();
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

app.use((error, _req, res, _next) => {
  res.status(error.status).json({ message: error.message });
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
