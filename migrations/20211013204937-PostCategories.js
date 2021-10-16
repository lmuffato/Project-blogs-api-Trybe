'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
      blogPostId: {
        type: Sequelize.INTEGER,
        field: 'postId',
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        field: 'categoryId',
        references: {
          model: 'Categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories')
  }
};
