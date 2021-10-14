'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categoriesTable = queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
    return categoriesTable;
  },

  down: async (queryInterface, _Sequelize) => {
    queryInterface.dropTable('Categories');
  }
};
