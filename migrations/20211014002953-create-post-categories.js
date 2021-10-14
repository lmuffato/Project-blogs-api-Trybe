'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
      postId: {
        type: Sequelize.Integer,
        references: {
          model: 'blogPosts',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      categoryId: {
        type: Sequelize.Integer,
        references: {
          model: 'categories',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  },
};
