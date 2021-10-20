module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: { 
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true, 
        type: Sequelize.INTEGER 
      },
      title: { 
        allowNull: false, 
        type: Sequelize.STRING 
      },
      content: { 
        allowNull: false, 
        type: Sequelize.STRING 
      },
      createdAt: { 
        allowNull: false, 
        type: Sequelize.DATE, 
        field: 'published' 
      },
      updatedAt: { 
        allowNull: false, 
        type: Sequelize.DATE, 
        field: 'updated' 
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  },
};

// Ref: aula ao vivo 29.2 - Renato Filho