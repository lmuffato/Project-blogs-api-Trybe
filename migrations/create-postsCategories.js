'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('PostsCategories', {
            postId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'BlogPosts',
                    key: 'id',
                },
            },
            categoryId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Categories',
                    key: 'id',
                },
            },
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('PostsCategories');
    },
};