const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const errors = require('./src/middlewares/error');
const user = require('./src/controllers/userControler');
const category = require('./src/controllers/categoryController');
const post = require('./src/controllers/blogPostController');

const app = express();

app.use(bodyParser.json());

app.post('/user', rescue(user.createUser));
app.post('/login', rescue(user.login));
app.get('/user/:id', rescue(user.validateToken), rescue(user.getById));
app.get('/user', rescue(user.validateToken), rescue(user.getAll));

app.post('/categories', rescue(user.validateToken), rescue(category.createCategory));
app.get('/categories', rescue(user.validateToken), rescue(category.getAll));

app.post('/post', rescue(user.validateToken), rescue(post.createPost));
app.get('/post/:id', rescue(user.validateToken), rescue(post.getPostById));
app.get('/post', rescue(user.validateToken), rescue(post.getAllPosts));
app.put('/post/:id', rescue(user.validateToken), rescue(post.editPost));

app.use(errors);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
