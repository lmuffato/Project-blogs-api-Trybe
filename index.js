const express = require('express');
const userRouter = require('./src/routers/userRouter');

const app = express();

app.use(express.json());
app.use('/user', userRouter);

app.use((error, _req, res, _next) => res.status(error.status).json(error.error));

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
