'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: Sequelize.STRING,
      content: Sequelize.STRING,
      userId: { 
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'published'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts')
  }
};