'use strict';

module.exports = {
    up: async (QueryInterface, Sequelize) => {
        await QueryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
              },
            displayName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            image: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        });
    },
    down: async (QueryInterface, Sequelize) => {
        await QueryInterface.dropTable('Users');
    },
};