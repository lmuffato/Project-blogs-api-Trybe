'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
			id:{
				allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
			},
      postId: {
        allowNull: false,
        type: Sequelize.INTEGER,
				references: {
          model: 'BlogPosts',
          key: 'id',
        },
      },
			categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  }
};