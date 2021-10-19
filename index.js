const express = require('express');
const router = require('./src/routes');

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/', router.user);

app.listen(3000, () => console.log('ouvindo porta 3000!'));