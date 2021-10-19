'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
      postID: {
        onDelete: 'CASCADE',
        primaryKey: true,
        references: { model: 'BlogPosts', key: 'id' },
        type: Sequelize.INTEGER,
      },
      categoryId: {
        onDelete: 'CASCADE',
        references: { model: 'Categories', key: 'id' },
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  }
};