const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const userRouter = require('./routers/userRouter');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT;

app.listen(port, () => console.log(`ouvindo porta ${port}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);

/* app.post('/user', userController.create);
app.get('/user', userController.getAll); */
