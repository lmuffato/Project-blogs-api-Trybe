const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user.route');

const app = express();

app.use(bodyParser.json());

app.use(userRoute);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
