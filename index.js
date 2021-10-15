const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./src/api/router/user');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', usersRouter);

// Iniciando o Sequelize-Cli: npx sequelize-cli init (cria a pasta config e a models);
// Criando o banco do projeto: npx sequelize db:create
// Criando as tabelas do banco: npx sequelize migration:generate --name nome_das_tabelas;
// Criando as migrações no banco de dados: npx sequelize db:migrate