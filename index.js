const express = require('express');
const bodyParser = require('body-parser');
const { error } = require('./src/middlewares');
const { userRouter, loginRouter, categoriesRouter, postRouter } = require('./src/routes');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

// Verificando se ta tudo certo Double 

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'Pong' });
});

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

app.use(error);
