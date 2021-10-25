const express = require('express');

const app = express();
const userRouter = require('./routers.js/userRouter');

app.use(express.json());
app.use('/user', userRouter);

app.use((err, _req, res, _next) => {
  console.log(err);
  return res.status(err.status).json(err.error);
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));