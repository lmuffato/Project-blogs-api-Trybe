const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const userRouter = require('./routers/userRouter');
const loginRouter = require('./routers/loginRouter');
const categoriesRouter = require('./routers/categoriesRouter');
const postRouter = require('./routers/postRouter');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT;

app.listen(port, () => console.log(`ouvindo porta ${port}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);
