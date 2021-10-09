'use strict';
module.exports = {
  /**
  * 
  * @param {import('sequelize').QueryInterface} queryInterface 
  * @param {import('sequelize').DataTypes} Sequelize 
  */ 
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.createTable('PostsCategories', {
    //   postId: {
    //     allowNull: false,
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'BlogPosts',
    //       key: 'id',
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'CASCADE',
    //     primaryKey: true,
    //   },
    //   categoryId: {
    //     allowNull: false,
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'Category',
    //       key: 'id',
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'CASCADE',
    //     primaryKey: true,
    //   }
    // });
  },
  down: async (queryInterface, _Sequelize) => {
    // await queryInterface.dropTable('PostsCategories');
  }
};