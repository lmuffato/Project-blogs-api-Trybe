// models/Category.js
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'Categories', // Define o nome da tabela a ser usada, ignorando o nome definido no models.
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`.
    // underscored: false, // Converte o campo do formato camelCase para SNAKE_CASE.
    // freezeTableName: true, // Faz o sequelize buscar uma tabela com o nome exato passado ao models.
  });
  return Category;
};