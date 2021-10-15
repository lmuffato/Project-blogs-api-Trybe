const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', 
userValidation.emailExists, 
userValidation.emailValidation, 
userValidation.nameValidation, 
Users.createUser);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
