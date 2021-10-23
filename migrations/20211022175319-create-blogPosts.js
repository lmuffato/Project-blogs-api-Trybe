'use strict';

/* Antes de executar a migração, é necessáiro ter feito a criação
do arquivo de migração pelo comando:
npx sequelize db:create

npx sequelize migration:generate --name create-blog-posts
*/

module.exports = {
  // Cria tabela table
  up: async (queryInterface, Sequelize) => {
    // Cria a tabela chamada Stories, usando o queryInterface, 
    const BlogPosts = queryInterface.createTable('BlogPosts', {
      id:                         // Nome da coluna
      {
        allowNull: false,         // Campo não pode ser nulo
        autoIncrement: true,      // O preenchimento é por autoincremento
        primaryKey: true,         // É uma chave primária
        type: Sequelize.INTEGER,  // É to tipo inteiro
      },
      title:
      {
        allowNull: false,
        type: Sequelize.STRING,   // É to tipo string
      },
      content:
      {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId:                     // Campo preenchido por chave estrangeira
      {
        type: Sequelize.INTEGER,  // O dado é do tipo inteiro
        allowNull: false,         // Não pode ser nulo
        onUpdate: 'CASCADE',      // Recebe update em cascata, através da chave extrangeira
        onDelete: 'CASCADE',      // Pode ser deletado em cascata, através da chave extrangeira
        defaultValue: 1,          // O valor defalt é 1
        references: {             // Referências de tabela e campo
          model: 'Users',         // A tabela de referência é a Users
          key: 'id',              // A chave extrangeria é o campo id da tabela Users
        }
      },
      published:                      // Data em que o registro é criado
      {
        allowNull: false,             // Não pode ser nulo
        type: Sequelize.DATE,         // É to tipo data
        defaultValue: new Date(),  // O valor padrão desse campo, é a hora atual em que ele for gravado;
      },
      updated:                        // Data em que o registro é atualizado/alterado
      {
        allowNull: false,             // Não pode ser nulo
        type: Sequelize.DATE,         // É to tipo data
        defaultValue: new Date(),  // O valor padrão desse campo, é a hora atual em que ele for gravado;
      },
    });
    return BlogPosts
  },

  // Desfaz o que o comando up faz, no caso deleta a tabela BlogPosts
  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('BlogPosts');
  }
};

/* Depois de configurar o arquivo, executar a migration:
npx sequelize db:migrate

Para desfazer o que a migrate fez:
npx sequelize db:migrate:undo
*/