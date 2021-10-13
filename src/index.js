const express = require('express');
const bodyParser = require('body-parser');
const UserRoutes = require('./routes/UserRoutes');
const ErrorMiddleware = require('./database/middlewares/error');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', UserRoutes);

app.use(ErrorMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));