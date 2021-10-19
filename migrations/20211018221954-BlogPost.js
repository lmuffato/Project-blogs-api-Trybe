'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.integer,
        foreignKey: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        as: 'published',
        autoIncrement: true,
      },
      updatedAt: {
        type: Sequelize.DATE,
        as: 'updated',
        autoIncrement: true,
      },
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
