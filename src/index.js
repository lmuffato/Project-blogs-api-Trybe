const express = require('express');
const bodyParser = require('body-parser');
const userControllers = require('./controllers/userControllers');
const authenticateControllers = require('./controllers/authenticateControllers');
const categoriesControllers = require('./controllers/categoriesControllers');
const postControllers = require('./controllers/postControllers');
const errors = require('./middlewares/errors');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userControllers);
app.use('/login', authenticateControllers);
app.use('/categories', categoriesControllers);
app.use('/post', postControllers);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use(errors);

module.exports = app;
