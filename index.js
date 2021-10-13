const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoute = require('./src/routes/userRoute');

app.use(bodyParser.json());

app.use('/user', userRoute);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

module.exports = app;