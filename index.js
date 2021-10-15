const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user');
const loginRouter = require('./routes/login');
const categoriesRouter = require('./routes/category');

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
app.use('/categories', categoriesRouter);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));