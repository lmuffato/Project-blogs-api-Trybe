'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const table = queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'id'
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
    return table;
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Categories');
  }
};