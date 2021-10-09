'use strict';
module.exports = {
/**
* 
* @param {import('sequelize').QueryInterface} queryInterface 
* @param {import('sequelize').DataTypes} Sequelize 
*/ 
up: async (queryInterface, Sequelize) => {
await queryInterface.createTable('PostsCategories', {
postId: {
type: Sequelize.INTEGER,
references: {
model: 'BlogPosts',
key: 'id',
},
onUpdate: 'CASCADE',
onDelete: 'CASCADE',
primaryKey: true,
},
categoryId: {
type: Sequelize.INTEGER,
references: {
model: 'Categories',
key: 'id',
},
onUpdate: 'CASCADE',
onDelete: 'CASCADE',
primaryKey: true,
}
});
},
down: async (queryInterface, Sequelize) => {
await queryInterface.dropTable('PostsCategories');
}
}; 