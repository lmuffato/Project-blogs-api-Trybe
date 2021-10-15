const express = require('express');
const bodyParse = require('body-parser');

const app = express();

const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const categorieRouter = require('./routes/categoriesRouter');
const postRouter = require('./routes/postRouter');

app.use(bodyParse.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categorieRouter);
app.use('/post', postRouter);

app.listen(process.env.PORT || 3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
