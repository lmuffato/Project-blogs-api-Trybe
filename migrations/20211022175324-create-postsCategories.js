'use strict';

/* Antes de executar a migração, é necessáiro ter feito a criação
do arquivo de migração pelo comando:

npx sequelize migration:generate --name create-posts-categories
*/

module.exports = {
  // Cria tabela table
  up: async (queryInterface, Sequelize) => {
    // Cria a tabela chamada Stories, usando o queryInterface, 
    const PostsCategories = queryInterface.createTable('PostsCategories', {
      postId:                     // Campo preenchido por chave estrangeira
      {
        type: Sequelize.INTEGER,  // O dado é do tipo inteiro
        allowNull: false,         // Não pode ser nulo
        onUpdate: 'CASCADE',      // Recebe update em cascata, através da chave extrangeira
        onDelete: 'CASCADE',      // Pode ser deletado em cascata, através da chave extrangeira
        primaryKey: true,         // Esse campo é uma chave primária
        references: {             // Referências de tabela e campo
          model: 'BlogPosts',     // A tabela de referência é a Users
          key: 'id',              // A chave extrangeria é o campo id da tabela Users
        },
      },
      categoryId:                 // Campo preenchido por chave estrangeira
      {
        type: Sequelize.INTEGER,  // O dado é do tipo inteiro
        allowNull: false,         // Não pode ser nulo
        onUpdate: 'CASCADE',      // Recebe update em cascata, através da chave extrangeira
        onDelete: 'CASCADE',      // Pode ser deletado em cascata, através da chave extrangeira
        primaryKey: true,         // Esse campo é uma chave primária
        defaultValue: 1,          // O valor defalt é 1
        references: {             // Referências de tabela e campo
          model: 'Categories',         // A tabela de referência é a Users
          key: 'id',              // A chave extrangeria é o campo id da tabela Users
        }
      },
    });
    return PostsCategories
  },

  // Desfaz o que o comando up faz, no caso deleta a tabela Categories
  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('PostsCategories');
  }
};

/* Depois de configurar o arquivo, executar a migration:
npx sequelize db:migrate

Para desfazer o que a migrate fez:
npx sequelize db:migrate:undo
*/