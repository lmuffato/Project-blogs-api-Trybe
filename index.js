const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/userRouters');
const login = require('./routes/loginRouter');
const categories = require('./routes/categoryRouters');
const post = require('./routes/postRouter');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.use('/user', user);
app.use('/login', login);
app.use('/categories', categories);
app.use('/post', post);

app.use((error, _req, res, _next) => {
  console.log(error);
  res.status(error.status).json({ message: error.message });
});

app.listen(PORT, () => console.log(`Online na porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
