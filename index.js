const express = require('express');

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

const userRouter = require('./routers/userRouter');

app.use('/user', userRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));