const express = require('express');
const bodyParser = require('body-parser');
const userRouters = require('./routers/user');
const categoriesRouters = require('./routers/categories');
const loginRouters = require('./routers/login');
const postRouters = require('./routers/post');

const app = express();

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(bodyParser.json());
app.use('/categories', categoriesRouters);
app.use('/user', userRouters);
app.use('/login', loginRouters);
app.use('/post', postRouters);
