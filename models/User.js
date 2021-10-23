// models/User.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,  
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    tableName: 'Users', // Define o nome da tabela a ser usada, ignorando o nome definido no models.
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`.
    // underscored: false, // Converte o campo do formato camelCase para SNAKE_CASE.
    // freezeTableName: true, // Faz o sequelize buscar uma tabela com o nome exato passado ao models.
  });

  User.associate = (models) => { // Define a relação de associação de um ou mais campos desta tabela com outra.
    User.hasMany(models.BlogPost, // Um usuário pode ter vários posts na tabela BlogPost.
      { foreignKey: 'userId', as: 'userPosts' }); // O campo userId será exibido como 'userPosts' na tabela BlogPost.
  };
  return User;
};
