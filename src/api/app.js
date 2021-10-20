require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user');
const loginRouter = require('./routes/login');
const categoriesRouter = require('./routes/categories');
const postRouter = require('./routes/post');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

module.exports = app;