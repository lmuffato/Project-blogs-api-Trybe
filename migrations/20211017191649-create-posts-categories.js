'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
      PostId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Categories',
          key: 'id',
        },
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  }
};
