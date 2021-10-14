const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./api/routes/users');
const errors = require('./api/middlewares/errors');
// const loginRoutes = require('./api/routes/login');
// const categoriesRoutes = require('./api/routes/categories');
// const postRoutes = require('./api/routes/post');

const app = express();

app.use(bodyParser.json());
app.use('/user', usersRoutes);
// app.use('/login', loginRoutes);
// app.use('/categories', categoriesRoutes);
// app.use('/post', postRoutes);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(errors);

module.exports = app;
