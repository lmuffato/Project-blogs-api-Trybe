const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');
const loginRouter = require('./routers/loginRouter');
require('dotenv/config');

const error = require('./middleware/error');

const PORT = process.env.PORT || 3000; 

const app = express();

app.use(bodyParser.json());

app.use('/', userRouter, error);

app.use('/', loginRouter, error);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar aaaa
app.get('/', (request, response) => {
  response.send();
});
