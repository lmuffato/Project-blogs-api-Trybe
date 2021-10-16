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
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      published: {
        allowNull: true,
        default: Sequelize.NOW,
        type: Sequelize.DATE,
      },
        updated: {
        allowNull: true,
        default: Sequelize.NOW,
        type: Sequelize.DATE,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'userId',
        references: {
          model: 'Users',
          Key: 'id'
        }
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
