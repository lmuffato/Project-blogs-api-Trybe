const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRoutes');
const errorHandler = require('./controllers/errorController');
const authController = require('./controllers/authController');

dotenv.config();

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
app.use('/login', authController.login);

app.use(errorHandler);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
