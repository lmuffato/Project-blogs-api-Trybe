const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const errorMiddleware = require('./middlewares/error');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', userController.create);

app.use(errorMiddleware);

app.listen(port, () => console.log(`ouvindo porta ${port}`));
