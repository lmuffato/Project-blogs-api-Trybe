'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('BlogPosts', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      references: {
          model: 'Users',
          key: 'id',   
  },
   })
  },
  down: async (queryInterface, Sequelize) => {
   await queryInterface.removeColumn('BlogPosts', 'userId')
  }
};
