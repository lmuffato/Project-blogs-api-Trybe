'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const UsersTable = await queryInterface.createTable('Users', {
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    displayName: {
      allowNull: false,
      type: Sequelize.STRING
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING
    },
    image: {
      allowNull: false,
      type: Sequelize.STRING
    },
   });

   return UsersTable;
  },

  down: async (queryInterface) => await queryInterface.dropTable('Users'),
};
