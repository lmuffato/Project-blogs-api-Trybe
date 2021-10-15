const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./src/api/router/user');
const loginRouter = require('./src/api/router/login');
const categoriesRouter = require('./src/api/router/categories');
const postRouter = require('./src/api/router/post');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', usersRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

// Iniciando o Sequelize-Cli: npx sequelize-cli init (cria a pasta config e a models);
// Criando o banco do projeto: npx sequelize db:create
// Criando as tabelas do banco: npx sequelize migration:generate --name nome_das_tabelas;
// Criando as migrações no banco de dados: npx sequelize db:migrate