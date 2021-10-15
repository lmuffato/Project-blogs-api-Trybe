const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user');
const loginRouter = require('./routes/login');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json()); 

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));