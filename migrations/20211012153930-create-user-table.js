'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Users',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        displayName: {
          type: Sequelize.STRING(32),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(32),
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING(32),
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  },
};
