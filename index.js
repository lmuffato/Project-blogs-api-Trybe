const express = require('express');

const Routes = require('./routes');
const ErrorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());
app.use(Routes);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(ErrorMiddleware);
app.listen(3000, () => console.log('ouvindo porta 3000!'));
