'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
      postId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'BlogPosts',
          key: 'id', // primaryKey da tabela BlogPost
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
      },
      
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories', // nome da tabela visto gerado pela Migration
          key: 'id', // primaryKey da tabela Category
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories')
  }
};
