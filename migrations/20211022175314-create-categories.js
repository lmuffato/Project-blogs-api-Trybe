'use strict';

/* Antes de executar a migração, é necessáiro ter feito a criação
do arquivo de migração pelo comando:

npx sequelize migration:generate --name create-categories
*/

module.exports = {
  // Cria tabela table
  up: async (queryInterface, Sequelize) => {
    // Cria a tabela chamada Stories, usando o queryInterface, 
    const Categories = queryInterface.createTable('Categories', {
      id:                         // Nome da coluna
      {
        allowNull: false,         // Campo não pode ser nulo
        autoIncrement: true,      // O preenchimento é por autoincremento
        primaryKey: true,         // É uma chave primária
        type: Sequelize.INTEGER,  // É to tipo inteiro
      },
      name:
      {
        allowNull: false,
        type: Sequelize.STRING,   // É to tipo string
      },
    });
    return Categories
  },

  // Desfaz o que o comando up faz, no caso deleta a tabela Categories
  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('Categories');
  }
};

/* Depois de configurar o arquivo, executar a migration:
npx sequelize db:migrate

Para desfazer o que a migrate fez:
npx sequelize db:migrate:undo
*/