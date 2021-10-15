const express = require('express');
const dotenv = require('dotenv');
const UserRoutes = require('./routes/UserRoute');

const app = express();
app.use(express.json());
dotenv.config();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(UserRoutes);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
