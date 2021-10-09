const express = require('express');
const errorMiddleware = require('./src/middlewares/errorMiddleware');

const app = express();

const { user, login, categories, blogposts } = require('./src/routes');

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.get('/', (_request, response) => {
  response.send();
});

app.use('/user', user);

app.use('/login', login);

app.use('/categories', categories);

app.use('/post', blogposts);

app.use(errorMiddleware);
