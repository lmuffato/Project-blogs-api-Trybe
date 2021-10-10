const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const loginController = require('./controllers/login');
const errorMiddleware = require('./middlewares/error');
const { authToken } = require('./middlewares/token');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', userController.create);
app.get('/user', authToken, userController.getAll);
app.get('/user/:id', authToken, userController.getById);

app.post('/login', loginController.userLogin);

app.use(errorMiddleware);

app.listen(port, () => console.log(`ouvindo porta ${port}`));
