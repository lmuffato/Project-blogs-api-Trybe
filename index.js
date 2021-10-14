const express = require('express');
const bodyParser = require('body-parser');
const errorHandle = require('./middlewares/errorHandle');
const userRouter = require('./router/userRouter');
const loginRouter = require('./router/loginRouter');
const categorieRouter = require('./router/categorieRouter');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use('/user', userRouter, errorHandle);
app.use('/login', loginRouter, errorHandle);
app.use('/categories', categorieRouter, errorHandle);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

const { env: { PORT } } = process;

const port = PORT || 3000;

app.listen(port, () => console.log(`ouvindo porta ${port}!`));
