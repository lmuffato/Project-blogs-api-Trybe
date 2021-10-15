module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Categorie', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
  }, { timestamps: false });

  return Category;
};