'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
      postId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'BlogPosts',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        // allowNull: false,
        // field: 'post_id',
      },
      categoryID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        // allowNull: false,
        // field: 'category_id',
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  }
};