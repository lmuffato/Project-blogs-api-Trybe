const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const routes = require('../routes');

const errorMiddleware = require('../middlewares/errorMiddleware');

const routeNotFound = require('../middlewares/routeNotFound');

app.use(bodyParser.json());
app.use(cors());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', routes.UserRoutes);
app.use('/login', routes.LoginRoutes);
app.use('/Categories', routes.CategoryRoutes);

app.use(routeNotFound);

app.use(errorMiddleware);

module.exports = app;