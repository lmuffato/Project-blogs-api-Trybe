'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name: Sequelize.STRING,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('categories');
  }
};
