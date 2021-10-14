require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');
const categoriesController = require('./controllers/categoriesController');
const blogPostControllers = require('./controllers/blogPostControllers');

const app = express();
const PORT = process.env.PORT || 3000;
// app.use(express.json());
app.use(bodyParser.json());

app.use('/user', userController);
app.use('/login', loginController);
app.use('/categories', categoriesController);
app.use('/post', blogPostControllers);
// app.use('/', (req, res) => {
//   console.log('Aqui', req.body.name);
// });
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}`));
// module.exports = app;