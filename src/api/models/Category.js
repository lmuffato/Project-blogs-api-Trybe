module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Categorie', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  });

  return Category;
};