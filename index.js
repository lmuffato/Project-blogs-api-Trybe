const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const loginRoutes = require('./routes/login');
const categoriesRoutes = require('./routes/category');
const blogPostRoutes = require('./routes/blogPost');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRoutes);
app.use('/login', loginRoutes);
app.use('/categories', categoriesRoutes);
app.use('/post', blogPostRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('ouvindo porta 3000!'));