const bodyParser = require('body-parser');
const express = require('express');
const userRouter = require('./src/routes/user');
const postRouter = require('./src/routes/post');
const categoryRouter = require('./src/routes/category');
const loginRouter = require('./src/routes/login');

const app = express();
app.use(bodyParser.json());

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// User
app.use('/user', userRouter);

// Login
app.use('/login', loginRouter);

// Categories
app.post('/categories', categoryRouter);

// Posts
app.post('/post', postRouter);
