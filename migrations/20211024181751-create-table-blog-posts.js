'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
			content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      createAt: {
        type: 'TIMESTAMP',
        allowNull: false,
				field: 'published'
      },
      updatedAt: {
        type: 'TIMESTAMP',
        allowNull: false,
				field: 'updated'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};