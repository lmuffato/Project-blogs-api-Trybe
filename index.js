const express = require('express');
const bodyParser = require('body-parser');
const errorMiddleware = require('./middlewares/error');

const app = express();
app.use(bodyParser.json());
const userRouter = require('./routes/User');

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);

app.use(errorMiddleware);