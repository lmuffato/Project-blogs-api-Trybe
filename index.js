require('dotenv').config();

const express = require('express');
const errorMiddleware = require('./src/middlewares/errorMiddleware');

const app = express();

const { user, login, categories, blogposts } = require('./src/routes');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

app.get('/', (_request, response) => {
  response.send();
});

app.use('/user', user);

app.use('/login', login);

app.use('/categories', categories);

app.use('/post', blogposts);

app.use(errorMiddleware);
