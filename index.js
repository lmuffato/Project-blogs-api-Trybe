const express = require('express');
const bodyParse = require('body-parser');

const app = express();

const userRouter = require('./routes/userRouter');

app.use(bodyParse.json());

app.use('/user', userRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
