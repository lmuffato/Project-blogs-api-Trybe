const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config(); // Configura o uso de variáveis de ambiente

const userController = require('./services/user/userController');
const postController = require('./services/post/postController');
const categoryController = require('./services/category/categoryController');
const loginController = require('./services/login/loginController');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userController);

app.use('/post', postController);

app.use('/categories', categoryController);

app.use('/login', loginController);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}`));
