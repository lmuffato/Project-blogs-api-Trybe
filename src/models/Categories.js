module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, { tableName: 'Categories', timestamps: false });
  return Categories;
};