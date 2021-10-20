const express = require('express');
const bodyParse = require('body-parser');
const controllerUser = require('./controller/user');
const controllerCategory = require('./controller/category');
const controllerBlogPost = require('./controller/blogPost');

const app = express();

app.use(bodyParse.json());
app.use(express.json());

const Port = 3000;

app.post('/user', controllerUser.createUser);

app.post('/login', controllerUser.login);

app.get('/user', controllerUser.getAll);

app.get('/user/:id', controllerUser.findId);

app.post('/categories', controllerCategory.createCategory);

app.get('/categories', controllerCategory.findCategory);

app.post('/post', controllerBlogPost.createBlogPost);

app.use((err, _req, res, _next) => {
  const { message, status } = err;
  res.status(status).json({ message });
});

app.listen(Port, () => console.log(`ouvindo porta ${Port}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
