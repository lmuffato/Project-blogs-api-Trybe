'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      
      displayName: Sequelize.STRING,

      email: {
        unique: true,
        type: Sequelize.STRING,
      },

      password: Sequelize.STRING,

      image: Sequelize.STRING,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Users');
  }
};
