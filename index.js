const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');
const loginRouter = require('./routers/loginRouter');
require('dotenv/config');
const categoryRouter = require('./routers/categoryRouter');
const postRouter = require('./routers/postRouter');

const error = require('./middleware/error');

const PORT = process.env.PORT || 3000; 

const app = express();

app.use(bodyParser.json());

app.use('/user', userRouter, error);

app.use('/login', loginRouter, error);

app.use('/categories', categoryRouter, error);

app.use('/post', postRouter, error);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar 
app.get('/', (request, response) => {
  response.send();
});

// Este projeto fui realizado com sucesso pois tive ajuda de Anderson Nascimento, Marília Aldrighi, Pollyana Oliveira, Luan Ramalho, Lucas Lara, João nascimento... to be continue
