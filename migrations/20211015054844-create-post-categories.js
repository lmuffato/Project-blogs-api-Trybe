'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
			postId: {
				type: Sequelize.INTEGER,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'BlogPosts',
          key: 'id',
        }
			},
      categoryId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Categories',
          key: 'id',
        },
        primaryKey: true,
      }
		});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  }
};

// Source:
// --> Solução adaptada da proposta de modelagem de tabelas do colega Lucas Lara
// --> Link: https://trybecourse.slack.com/archives/C01L16B9XC7/p1633813173137100
// --> Solução adaptada do PR da colega Marília Cegalla
// --> Link: https://github.com/tryber/sd-010-a-project-blogs-api/blob/maricegalla-project-blogs-api/models/PostsCategory.js
// Documentação consultada: https://sequelize.org/master/manual/assocs.html#many-to-many-relationships