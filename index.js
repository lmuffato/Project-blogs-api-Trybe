const express = require('express');
const bodyParser = require('body-parser');
const Users = require('./controllers/UserController');
const Categories = require('./controllers/CategoryController');
const BlogPosts = require('./controllers/BlogPostController');
const Validations = require('./middlewares/Validations');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', [
  Validations.validateName,
  Validations.validateEmail,
  Validations.validatePassword,
  Users.createUser,
]);

app.post('/login', [
  Validations.validateEmail,
  Validations.validatePassword,
  Users.userLogin,
]);

app.get('/user', [
  Validations.checkToken,
  Users.getUsers,
]);

app.get('/user/:id', Validations.checkToken, Users.getUserById);

app.post('/categories', Validations.checkToken, Categories.createCategory);

app.get('/categories', Validations.checkToken, Categories.getCategories);

app.post('/post', [
  Validations.validatePostTitleNContent,
  Validations.validatePostCategoryIds,
  Validations.checkToken,
  BlogPosts.createPost,
]);

app.get('/post', Validations.checkToken, BlogPosts.getPosts);

app.put('/post/:id', [
  Validations.checkToken,
  Validations.validatePostTitleNContent,
  BlogPosts.updatePost,
]);

app.delete('/post/:id', Validations.checkToken, BlogPosts.deletePost);

app.delete('/user/me', Validations.checkToken, Users.deleteMe);

app.get('/post/search', Validations.checkToken, BlogPosts.getByQuery);

app.get('/post/:id', Validations.checkToken, BlogPosts.getPostById);
