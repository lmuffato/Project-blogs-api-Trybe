const express = require('express');
const bodyParser = require('body-parser');

const Users = require('./controller/userController');
const Categories = require('./controller/categoryController');
const validateJWT = require('./middleware/auth/validateJWT');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

// Requisito 03
app.get('/user', validateJWT, Users.getAll);

// Requisito 01
app.post('/user', Users.create);

// Requisito 04
app.get('/user/:id', validateJWT, Users.getById);

// Requisito 02
app.post('/login', Users.login);

// Requisito 05
app.post('/categories', validateJWT, Categories.create);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
