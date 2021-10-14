const express = require('express');
const bodyParser = require('body-parser');
const { checkUserInfo } = require('./middlewares/checkUserInfo');
const { checkLogin } = require('./middlewares/checkLogin');
const { validateToken } = require('./middlewares/validateToken');
const { checkCategoryInfo } = require('./middlewares/checkCategoryInfo');
const { checkPostInfo } = require('./middlewares/checkPostInfo');
const {
  userController: { createUser, findAllUsers, findUser, deleteUser },
  loginController: { login },
  categoryControler: { createCategory, findAllCategories },
  postController: { createPost, getAllPosts, getPostById, updatePost, deletePost, findByQuery },
} = require('./controllers');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.route('/user')
  .post(checkUserInfo, createUser)
  .get(validateToken, findAllUsers);

app.get('/user/:id', validateToken, findUser);

app.delete('/user/me', validateToken, deleteUser);

app.post('/login', checkLogin, login);

app.route('/categories')
  .post(validateToken, checkCategoryInfo, createCategory)
  .get(validateToken, findAllCategories);

  app.get('/post/search', validateToken, findByQuery);

app.route('/post')
  .post(validateToken, checkPostInfo, createPost)
  .get(validateToken, getAllPosts);

app.route('/post/:id')
  .get(validateToken, getPostById)
  .put(validateToken, updatePost)
  .delete(validateToken, deletePost);
