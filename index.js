const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoute = require('./src/routes/userRoute');
const loginRoute = require('./src/routes/loginRoute');

app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/login', loginRoute);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

module.exports = app;