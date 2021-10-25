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
    createdAt: {
      type: Sequelize.DATE,
      field: 'published',
      allowNull: true,
      default: new Date(),
    },
    updatedAt: {
      type: Sequelize.DATE,
      default: new Date(),
      field: 'updated',
      allowNull: true,
    }
  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
