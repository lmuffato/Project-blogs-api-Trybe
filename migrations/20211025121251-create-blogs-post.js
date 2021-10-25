'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('BlogPosts',  {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    published: {
      type: Sequelize.DATE,
      allowNull: true,
      default: new Date(),
    },
    updated: {
      type: Sequelize.DATE,
      default: new Date(),
      allowNull: true,
    }
  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
