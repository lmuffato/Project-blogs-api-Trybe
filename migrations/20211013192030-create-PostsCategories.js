'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
      postId: {
        type:Sequelize.INTEGER,
        field: 'post_id', // duvida
        references: {
          model: 'BlogPost',
          key: 'post_id' // duvida
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      categoryId: {
        type:Sequelize.INTEGER,
        field: 'category_id', // duvida
        references: {
          model: 'Categorie',
          key: 'category_id' // duvida
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  }
};
