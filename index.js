const express = require('express');

const app = express();

const Port = 3000;

app.listen(Port, () => console.log(`ouvindo porta ${Port}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

console.log(process.env.VER);