const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded());

const {
  userRouter,
  loginRouter,
  categoryRouter,
  postRouter,
} = require('./routers');

// ---------------------------------------------------- USERS ---------------------------------------------------- //

app.use('/user', userRouter);

app.use('/login', loginRouter);

// -------------------------------------------------- CATEGORIES ------------------------------------------------- //

app.use('/categories', categoryRouter);

// -------------------------------------------------- BLOGPOSTS -------------------------------------------------- //

app.use('/post', postRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));
