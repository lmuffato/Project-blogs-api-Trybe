const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

const userRouter = require('./routers/userRouter');

app.use('/user', userRouter);

const loginRouter = require('./routers/loginRouter');

app.use('/login', loginRouter);

const categoriesRouter = require('./routers/categoriesRouter');

app.use('/categories', categoriesRouter);

const postRouter = require('./routers/postRouter');

app.use('/post', postRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));